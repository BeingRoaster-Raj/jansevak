import { useState, useEffect } from "react"
import ReviewCard from "../components/ReviewCards"

function Reviews() {
  const [reviews, setReviews] = useState([])
  const [formData, setFormData] = useState({ name: "", review: "", rating: 5 })

  // ✅ Check if user is logged in
  const userId = localStorage.getItem("userId")

  // 🔹 Fetch existing reviews
  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reviews")
        return res.json()
      })
      .then((data) => setReviews(data))
      .catch((err) => console.error("❌ Error fetching reviews:", err))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!userId) {
      alert("🚫 Please log in before submitting a review.")
      return
    }

    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId }),
      })

      if (!res.ok) {
        const errorText = await res.text()
        throw new Error(`Server Error: ${errorText}`)
      }

      const newReview = await res.json()
      setReviews([newReview, ...reviews]) // Add review on top
      setFormData({ name: "", review: "", rating: 5 }) // Reset form
    } catch (err) {
      console.error("❌ Error submitting review:", err)
      alert("Failed to submit review. Check console for details.")
    }
  }

  // 🚫 If not logged in → block form
  if (!userId) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">🚫 Please log in</h2>
        <p className="text-gray-600">
          You must log in before submitting a review.
        </p>

        {/* But still show reviews */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">User Reviews</h2>
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <div className="space-y-4">
              {reviews.map((rev) => (
                <ReviewCard key={rev._id} {...rev} />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 mb-8"
      >
        <h2 className="text-xl font-bold mb-4">Leave a Review ✍️</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border rounded-lg p-2 mb-3"
          required
        />

        <textarea
          name="review"
          value={formData.review}
          onChange={handleChange}
          placeholder="Write your review..."
          className="w-full border rounded-lg p-2 mb-3"
          rows="3"
          required
        />

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mb-3"
        >
          <option value={5}>⭐ 5 - Excellent</option>
          <option value={4}>⭐ 4 - Good</option>
          <option value={3}>⭐ 3 - Average</option>
          <option value={2}>⭐ 2 - Poor</option>
          <option value={1}>⭐ 1 - Terrible</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <h2 className="text-lg font-bold mb-4">User Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((rev) => (
            <ReviewCard key={rev._id} {...rev} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Reviews
