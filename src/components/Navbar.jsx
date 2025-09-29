import { useState } from "react"
import { Link } from "react-router-dom"
import LoginModal from "./LoginModal"

export default function Navbar({ role, setRole }) {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white shadow-md">
      {/* Logo + Brand */}
      <div className="flex items-center gap-2">
        {/* Replace /logo.png with your logo file */}
        <img
          src="/logo.png"
          alt="Jansevak Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="font-extrabold text-4xl tracking-wide">Jansevak</h1>
      </div>

      {/* Links */}
      <ul className="flex gap-6 text-xl ">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/report">Report Issue</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
         <li><Link to="/badges">Badges</Link></li> 
        <li><Link to="/about">About</Link></li>
        {role === "admin" && <li><Link to="/admin-dashboard">Admin</Link></li>}
      </ul>

      {/* Auth Section */}
      {!role ? (
        <button
          onClick={() => setShowLogin(true)}
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Login / Signup
        </button>
      ) : (
        <div className="flex gap-4 items-center">
          <span>{role === "admin" ? "Admin" : "User"}</span>
          <button
            onClick={() => setRole(null)}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={(roleType) => {
            setRole(roleType) // "user" or "admin"
            setShowLogin(false)
          }}
        />
      )}
    </nav>
  )
}
