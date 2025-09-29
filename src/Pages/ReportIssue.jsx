import { useState, useEffect } from "react"
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

  // Check if user is logged in
  const userId = localStorage.getItem("userId")

  // Fetch existing issues from backend on page load
  useEffect(() => {
    fetch("http://localhost:5000/api/issues")
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
    data.append("userId", userId) // ✅ always include userId
    if (photo) data.append("photo", photo)

    try {
      const res = await fetch("http://localhost:5000/api/issues", {
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
    } catch (err) {
      console.error("❌ Error submitting issue:", err)
      alert("Failed to submit issue. Check console for details.")
    }
  }

  // 🚫 Block UI if not logged in
  if (!userId) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">🚫 Please log in</h2>
        <p className="text-gray-600">You must log in before reporting an issue.</p>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Issue Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 mb-8"
      >
        <h2 className="text-xl font-bold mb-4">Report an Issue 📝</h2>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Issue Title"
          className="w-full border rounded-lg p-2 mb-3"
          required
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the issue..."
          className="w-full border rounded-lg p-2 mb-3"
          rows="3"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mb-3"
        >
          <option>Garbage</option>
          <option>Road</option>
          <option>Water</option>
          <option>Other</option>
        </select>

        {/* Location */}
        <div className="mb-3">
          <button
            type="button"
            onClick={fetchLocation}
            className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition"
            disabled={loadingLocation}
          >
            {loadingLocation ? "Fetching Location..." : "📍 Use My Location"}
          </button>
          {formData.location && (
            <p className="text-sm text-blue-600 mt-2">
              Location: {formData.location}
            </p>
          )}
        </div>

        {/* File Upload (Custom Button) */}
        <div className="mb-3">
          <label
            htmlFor="photo"
            className="cursor-pointer bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition inline-block"
          >
            📷 Upload Photo
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

        {/* Preview */}
        {photo && (
          <img
            src={URL.createObjectURL(photo)}
            alt="Preview"
            className="w-full h-28 object-cover rounded mb-3 shadow"
          />
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Issue
        </button>
      </form>

      {/* Display Issues */}
      <h2 className="text-lg font-bold mb-4">Recent Issues</h2>
      {issues.length === 0 ? (
        <p className="text-gray-500">No issues reported yet.</p>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {issues.slice(0, visibleCount).map((issue) => (
              <IssueCard
                key={issue._id}
                {...issue}
                imageUrl={
                  issue.imageUrl ? `http://localhost:5000${issue.imageUrl}` : null
                }
              />
            ))}
          </div>

          {/* Load More button */}
          {visibleCount < issues.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setVisibleCount(visibleCount + 3)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ReportIssue
