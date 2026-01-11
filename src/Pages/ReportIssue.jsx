import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import IssueCard from "../components/IssueCard"

function ReportIssue() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Other",
    location: "",
  })

  const [photo, setPhoto] = useState(null)
  const [issues, setIssues] = useState([])
  const [loadingLocation, setLoadingLocation] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)
  const [photoPreview, setPhotoPreview] = useState(null)

  // Check if user is logged in
  const userId = localStorage.getItem("userId")

  // Fetch existing issues from backend on page load
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_ENDPOINT}/issues`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch issues")
        return res.json()
      })
      .then((data) => {
        console.log("✅ Issues fetched:", data)
        setIssues(data)
      })
      .catch((err) => {
        console.error("❌ Error fetching issues:", err)
        alert("Could not load issues. Check console.")
      })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPhoto(file)
      setPhotoPreview(URL.createObjectURL(file))
    }
  }

  // Auto-fetch location with human-readable address
  const fetchLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser")
      return
    }

    setLoadingLocation(true)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          )
          const data = await res.json()
          const address =
            data.display_name || `Lat: ${latitude}, Lng: ${longitude}`

          setFormData({ ...formData, location: address })
        } catch (err) {
          console.error("Error fetching address:", err)
          setFormData({
            ...formData,
            location: `Lat: ${latitude}, Lng: ${longitude}`,
          })
        }

        setLoadingLocation(false)
      },
      (error) => {
        console.error("Error getting location:", error)
        alert("Unable to fetch location. Please allow location access.")
        setLoadingLocation(false)
      }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!userId) {
      alert("🚫 Please log in before reporting an issue.")
      return
    }

    const data = new FormData()
    data.append("title", formData.title)
    data.append("description", formData.description)
    data.append("category", formData.category)
    data.append("location", formData.location)
    data.append("userId", userId)
    if (photo) data.append("photo", photo)

    try {
      const res = await fetch("${import.meta.env.VITE_API_ENDPOINT}/issues", {
        method: "POST",
        body: data,
      })

      if (!res.ok) {
        const errorText = await res.text()
        throw new Error(`Server Error: ${errorText}`)
      }

      const newIssue = await res.json()
      console.log("✅ New Issue Saved:", newIssue)

      // Add new issue to state
      setIssues([newIssue, ...issues])

      // Reset form
      setFormData({ title: "", description: "", category: "Other", location: "" })
      setPhoto(null)
      setPhotoPreview(null)

      // Success message
      alert("✅ Issue reported successfully!")
    } catch (err) {
      console.error("❌ Error submitting issue:", err)
      alert("Failed to submit issue. Check console for details.")
    }
  }

  // 🚫 Block UI if not logged in
  if (!userId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md"
        >
          <div className="text-7xl mb-6">🚫</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Please Log In</h2>
          <p className="text-gray-600 text-lg">
            You must log in before reporting an issue.
          </p>
        </motion.div>
      </div>
    )
  }

  const categoryIcons = {
    Garbage: "🗑️",
    Road: "🚧",
    Water: "💧",
    "Street Lights": "💡",
    Sewage: "🚰",
    Other: "📢"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 text-9xl"
        >
          📋
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-20 text-9xl"
        >
          ✍️
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">
            Report an Issue
          </h1>
          <p className="text-gray-600 text-lg">
            Help improve your community by reporting civic issues
          </p>
        </motion.div>

        {/* Issue Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-3xl p-8 mb-12 border-2 border-purple-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">📝</div>
            <h2 className="text-2xl font-bold text-gray-800">Issue Details</h2>
          </div>

          {/* Title */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Issue Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Broken street light on Main Road"
              className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-blue-500 focus:outline-none transition-all"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the issue in detail..."
              className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-blue-500 focus:outline-none transition-all"
              rows="4"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-blue-500 focus:outline-none transition-all appearance-none cursor-pointer"
              >
                <option>Garbage</option>
                <option>Road</option>
                <option>Water</option>
                <option>Street Lights</option>
                <option>Sewage</option>
                <option>Other</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl pointer-events-none">
                {categoryIcons[formData.category] || "📢"}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={fetchLocation}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl font-semibold flex items-center gap-2"
                disabled={loadingLocation}
              >
                <span className="text-xl">📍</span>
                {loadingLocation ? "Fetching..." : "Use My Location"}
              </button>
            </div>
            {formData.location && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 p-4 bg-blue-50 rounded-xl border-2 border-blue-200"
              >
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">📍 Location:</span> {formData.location}
                </p>
              </motion.div>
            )}
          </div>

          {/* Photo Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Photo (Optional)
            </label>
            <label
              htmlFor="photo"
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl font-semibold"
            >
              <span className="text-xl">📷</span>
              Choose Photo
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </div>

          {/* Photo Preview */}
          {photoPreview && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6"
            >
              <p className="text-gray-700 font-semibold mb-2">Photo Preview:</p>
              <div className="relative">
                <img
                  src={photoPreview}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPhoto(null)
                    setPhotoPreview(null)
                  }}
                  className="absolute top-3 right-3 bg-red-500 text-white w-10 h-10 rounded-full hover:bg-red-600 transition-all shadow-lg"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all font-bold text-lg"
          >
            Submit Issue
          </motion.button>
        </motion.form>

        {/* Display Issues */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Recent Issues</h2>
            <div className="bg-purple-100 px-4 py-2 rounded-full">
              <span className="font-semibold text-purple-700">{issues.length} Total</span>
            </div>
          </div>

          {issues.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
              <div className="text-7xl mb-4">📭</div>
              <p className="text-gray-500 text-lg">No issues reported yet.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {issues.slice(0, visibleCount).map((issue, idx) => (
                  <motion.div
                    key={issue._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <IssueCard
                      {...issue}
                      imageUrl={
                        issue.imageUrl ? `http://localhost:5000${issue.imageUrl}` : null
                      }
                    />
                  </motion.div>
                ))}
              </div>

              {/* Load More button */}
              {visibleCount < issues.length && (
                <div className="flex justify-center mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setVisibleCount(visibleCount + 3)}
                    className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold"
                  >
                    Load More Issues
                  </motion.button>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ReportIssue