import { useState } from "react"

function ReviewCard({ _id, name, review, rating, userId }) {
  const loggedInUserId = localStorage.getItem("userId")
  const role = localStorage.getItem("role") || "user"

  const [isEditing, setIsEditing] = useState(false)
  const [editedReview, setEditedReview] = useState(review)

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: loggedInUserId, role }),
      })
      if (res.ok) {
        window.location.reload() // refresh reviews
      }
    } catch (err) {
      console.error("❌ Error deleting review:", err)
    }
  }

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review: editedReview, userId: loggedInUserId, role }),
      })
      if (res.ok) {
        setIsEditing(false)
        window.location.reload()
      }
    } catch (err) {
      console.error("❌ Error updating review:", err)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-sm">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

      {isEditing ? (
        <textarea
          className="w-full border rounded-lg p-2 mb-2"
          value={editedReview}
          onChange={(e) => setEditedReview(e.target.value)}
        />
      ) : (
        <p className="text-gray-600 mt-2">{review}</p>
      )}

      <p className="text-yellow-500 mt-2">⭐ {rating}/5</p>

      {/* Show edit/delete if user owns review OR admin */}
      {(loggedInUserId === userId || role === "admin") && (
        <div className="flex gap-2 mt-3">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default ReviewCard
