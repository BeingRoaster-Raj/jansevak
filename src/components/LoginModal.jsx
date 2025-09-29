import { useState } from "react"
import { auth, googleProvider, facebookProvider } from "../Firebase"
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"

function LoginModal({ onClose, onLogin }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // 🔹 Admin Login
  const handleAdminLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem("userId", "admin")
        localStorage.setItem("role", "admin") // ✅ save role
        onLogin("admin")
        onClose()
      } else {
        setError(data.message || "Invalid admin credentials")
      }
    } catch (err) {
      setError("Server error, try again later")
    }
  }

  // 🔹 Email login
  const handleEmailLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      const user = userCred.user
      localStorage.setItem("userId", user.uid)
      localStorage.setItem("role", "user") // ✅ save role
      onLogin("user")
      onClose()
    } catch (err) {
      setError(err.message)
    }
  }

  // 🔹 Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      localStorage.setItem("userId", result.user.uid)
      localStorage.setItem("role", "user") // ✅ save role
      onLogin("user")
      onClose()
    } catch (err) {
      setError(err.message)
    }
  }

  // 🔹 Facebook login
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider)
      localStorage.setItem("userId", result.user.uid)
      localStorage.setItem("role", "user") // ✅ save role
      onLogin("user")
      onClose()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {isAdmin ? "Admin Login" : "Login / Signup"}
        </h2>

        {/* USER LOGIN / SIGNUP */}
        {!isAdmin ? (
          <>
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-red-500 text-white p-2 rounded mb-2"
            >
              Login with Google
            </button>

            <button
              onClick={handleFacebookLogin}
              className="w-full bg-blue-600 text-white p-2 rounded mb-2"
            >
              Login with Facebook
            </button>

            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full border-2 border-gray-300 focus:border-blue-600 rounded-lg p-2 outline-none text-gray-900 placeholder-gray-500 mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full border-2 border-gray-300 focus:border-blue-600 rounded-lg p-2 outline-none text-gray-900 placeholder-gray-500 mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleEmailLogin}
              className="w-full bg-green-500 text-white p-2 rounded mb-2"
            >
              Login with Email
            </button>

            <p
              onClick={() => setIsAdmin(true)}
              className="text-sm text-blue-600 cursor-pointer text-center mt-4"
            >
              Login as Admin
            </p>
          </>
        ) : (
          <>
            {/* ADMIN LOGIN */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter Admin Username"
                className="w-full border-2 border-blue-400 focus:border-blue-600 rounded-lg p-2 outline-none text-gray-900 placeholder-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Admin Password"
                className="w-full border-2 border-blue-400 focus:border-blue-600 rounded-lg p-2 outline-none text-gray-900 placeholder-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={handleAdminLogin}
              className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition"
            >
              Login as Admin
            </button>

            <p
              onClick={() => setIsAdmin(false)}
              className="text-sm text-gray-600 cursor-pointer text-center mt-3"
            >
              Back to User Login
            </p>
          </>
        )}

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button onClick={onClose} className="mt-4 text-gray-600">
          Close
        </button>
      </div>
    </div>
  )
}

export default LoginModal
