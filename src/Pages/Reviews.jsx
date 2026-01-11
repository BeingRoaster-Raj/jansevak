import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ReviewCard from "../components/ReviewCards"

function Reviews() {
  const [reviews, setReviews] = useState([])
  const [formData, setFormData] = useState({ name: "", review: "", rating: 5 })
  const [filterRating, setFilterRating] = useState("all")

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
      setReviews([newReview, ...reviews])
      setFormData({ name: "", review: "", rating: 5 })
      alert("✅ Review submitted successfully!")
    } catch (err) {
      console.error("❌ Error submitting review:", err)
      alert("Failed to submit review. Check console for details.")
    }
  }

  // Calculate stats
  const avgRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0

  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(r => r.rating === rating).length
  )

  // Filter reviews
  const filteredReviews = filterRating === "all" 
    ? reviews 
    : reviews.filter(r => r.rating === parseInt(filterRating))

  // 🚫 Block UI if not logged in
  if (!userId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 text-9xl"
          >
            ⭐
          </motion.div>
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-20 right-20 text-9xl"
          >
            💬
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-2xl relative z-10"
        >
          <div className="text-7xl mb-6">🚫</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Please Log In</h2>
          <p className="text-gray-600 text-lg mb-8">
            You must log in before submitting a review. However, you can still read existing reviews!
          </p>

          {/* Show existing reviews even when not logged in */}
          <div className="mt-12 text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recent Reviews</h3>
            {reviews.length === 0 ? (
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-3">📝</div>
                <p className="text-gray-500">No reviews yet.</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {reviews.slice(0, 3).map((rev) => (
                  <div key={rev._id} className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{rev.name}</h4>
                      <span className="text-yellow-500">{"⭐".repeat(rev.rating)}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{rev.review}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Stars */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          ⭐
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-40 right-20 text-5xl opacity-20"
        >
          ⭐
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-32 left-1/4 text-6xl opacity-15"
        >
          ⭐
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 right-1/3 text-5xl opacity-18"
        >
          ⭐
        </motion.div>

        {/* Speech Bubbles */}
        <motion.div
          animate={{ 
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/3 left-20 text-6xl opacity-15"
        >
          💬
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, -12, 0],
            y: [0, 8, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-1/3 right-20 text-5xl opacity-18"
        >
          💬
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-2/3 left-1/3 text-4xl opacity-15"
        >
          💬
        </motion.div>

        {/* Sparkles */}
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 text-5xl opacity-20"
        >
          ✨
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [0, -180, -360],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/2 text-6xl opacity-15"
        >
          ✨
        </motion.div>

        {/* Thumbs Up/Hearts */}
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
          className="absolute top-1/2 left-12 text-5xl opacity-15"
        >
          👍
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute bottom-1/2 right-16 text-6xl opacity-18"
        >
          ❤️
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
          className="absolute top-3/4 right-1/3 text-4xl opacity-15"
        >
          💖
        </motion.div>

        {/* Gradient Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '700ms' }}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse" style={{ animationDelay: '1500ms' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-8xl mb-6"
          >
            ⭐
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-4">
            Reviews & Feedback
          </h1>
          <p className="text-gray-700 text-xl">
            Share your experience and help us improve
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border-2 border-purple-100"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Average Rating */}
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-7xl font-extrabold text-purple-600 mb-2"
              >
                {avgRating}
              </motion.div>
              <div className="text-yellow-500 text-3xl mb-2">
                {"⭐".repeat(Math.round(avgRating))}
              </div>
              <div className="text-gray-700 font-semibold">Average Rating</div>
              <div className="text-sm text-gray-500 mt-1">
                Based on {reviews.length} reviews
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="md:col-span-2">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Rating Distribution</h3>
              {[5, 4, 3, 2, 1].map((rating, idx) => (
                <div key={rating} className="flex items-center gap-3 mb-3">
                  <div className="text-sm font-semibold text-gray-700 w-16 flex items-center gap-1">
                    <span>{rating}</span>
                    <span className="text-yellow-500">⭐</span>
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ 
                        width: reviews.length > 0 
                          ? `${(ratingCounts[idx] / reviews.length) * 100}%` 
                          : '0%' 
                      }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      className="bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 h-full rounded-full"
                    />
                  </div>
                  <div className="text-sm font-semibold text-gray-600 w-12 text-right">
                    {ratingCounts[idx]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-2xl rounded-3xl p-8 sticky top-6 border-2 border-purple-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">✍️</div>
                <h2 className="text-2xl font-bold text-gray-800">Leave a Review</h2>
              </div>

              {/* Name */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:outline-none transition-all"
                  required
                />
              </div>

              {/* Review */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Review <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  placeholder="Share your experience..."
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:outline-none transition-all"
                  rows="5"
                  required
                />
              </div>

              {/* Rating */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Rating <span className="text-red-500">*</span>
                </label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-purple-500 focus:outline-none transition-all cursor-pointer"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ Excellent (5)</option>
                  <option value={4}>⭐⭐⭐⭐ Good (4)</option>
                  <option value={3}>⭐⭐⭐ Average (3)</option>
                  <option value={2}>⭐⭐ Poor (2)</option>
                  <option value={1}>⭐ Terrible (1)</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all font-bold text-lg"
              >
                🚀 Submit Review
              </motion.button>
            </form>
          </motion.div>

          {/* Reviews List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800">User Reviews</h2>
              
              {/* Filter */}
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:outline-none cursor-pointer font-semibold"
              >
                <option value="all">All Ratings</option>
                <option value="5">⭐ 5 Stars</option>
                <option value="4">⭐ 4 Stars</option>
                <option value="3">⭐ 3 Stars</option>
                <option value="2">⭐ 2 Stars</option>
                <option value="1">⭐ 1 Star</option>
              </select>
            </div>

            {filteredReviews.length === 0 ? (
              <div className="bg-white rounded-3xl shadow-xl p-12 text-center border-2 border-gray-100">
                <div className="text-7xl mb-4">📝</div>
                <p className="text-gray-500 text-lg">
                  {filterRating === "all" 
                    ? "No reviews yet. Be the first to review!" 
                    : `No ${filterRating}-star reviews found.`}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredReviews.map((rev, idx) => (
                  <motion.div
                    key={rev._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <ReviewCard {...rev} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Reviews