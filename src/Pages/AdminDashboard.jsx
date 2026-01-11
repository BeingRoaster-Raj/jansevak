import { useEffect, useState } from "react"

function AdminDashboard() {
  const [issues, setIssues] = useState([])
  const [reviews, setReviews] = useState([])
  const [admins, setAdmins] = useState([])
  const [newAdmin, setNewAdmin] = useState({ username: "", password: "" })
  const [activeTab, setActiveTab] = useState("issues") // issues, reviews, admins

  useEffect(() => {
    fetch("http://localhost:5000/api/issues")
      .then(res => res.json())
      .then(data => setIssues(data))

    fetch("http://localhost:5000/api/reviews")
      .then(res => res.json())
      .then(data => setReviews(data))

    fetch("http://localhost:5000/api/admins")
      .then(res => res.json())
      .then(data => setAdmins(data))
  }, [])

  const deleteIssue = async (id) => {
    if (!confirm("Are you sure you want to delete this issue?")) return
    await fetch(`http://localhost:5000/api/issues/${id}`, { method: "DELETE" })
    setIssues(issues.filter(issue => issue._id !== id))
  }

  const deleteReview = async (id) => {
    if (!confirm("Are you sure you want to delete this review?")) return
    await fetch(`http://localhost:5000/api/reviews/${id}`, { method: "DELETE" })
    setReviews(reviews.filter(review => review._id !== id))
  }

  const addAdmin = async () => {
    if (!newAdmin.username || !newAdmin.password) {
      alert("Please fill in all fields")
      return
    }
    const res = await fetch("http://localhost:5000/api/admins/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAdmin)
    })
    const data = await res.json()
    setAdmins([...admins, data])
    setNewAdmin({ username: "", password: "" })
  }

  const removeAdmin = async (id) => {
    if (!confirm("Are you sure you want to remove this admin?")) return
    await fetch(`http://localhost:5000/api/admins/${id}`, { method: "DELETE" })
    setAdmins(admins.filter(admin => admin._id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="text-5xl">👨‍💼</div>
            <div>
              <h1 className="text-4xl font-extrabold text-white">Admin Dashboard</h1>
              <p className="text-blue-100 mt-1">Manage issues, reviews, and administrators</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-white">{issues.length}</div>
              <div className="text-sm text-blue-100">Total Issues</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-white">{reviews.length}</div>
              <div className="text-sm text-blue-100">Total Reviews</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-white">{admins.length}</div>
              <div className="text-sm text-blue-100">Administrators</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: "issues", label: "Issues", icon: "📋" },
            { id: "reviews", label: "Reviews", icon: "⭐" },
            { id: "admins", label: "Admins", icon: "👥" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-lg"
                  : "bg-white bg-opacity-60 text-gray-600 hover:bg-opacity-80"
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Issues Tab */}
          {activeTab === "issues" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Issues</h2>
              {issues.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <div className="text-5xl mb-3">📭</div>
                  No issues reported yet
                </div>
              ) : (
                <div className="space-y-3">
                  {issues.map(issue => (
                    <div
                      key={issue._id}
                      className="flex justify-between items-center p-4 border-2 border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">{issue.title}</div>
                        <div className="text-sm text-gray-500 mt-1">
                          Category: {issue.category} | Location: {issue.location?.substring(0, 50)}...
                        </div>
                      </div>
                      <button
                        onClick={() => deleteIssue(issue._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl ml-4"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Reviews</h2>
              {reviews.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <div className="text-5xl mb-3">📝</div>
                  No reviews submitted yet
                </div>
              ) : (
                <div className="space-y-3">
                  {reviews.map(review => (
                    <div
                      key={review._id}
                      className="flex justify-between items-center p-4 border-2 border-gray-100 rounded-xl hover:border-purple-200 hover:bg-purple-50 transition-all duration-300"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-800">{review.name}</span>
                          <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
                        </div>
                        <div className="text-sm text-gray-600">{review.review}</div>
                      </div>
                      <button
                        onClick={() => deleteReview(review._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl ml-4"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Admins Tab */}
          {activeTab === "admins" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Administrators</h2>
              
              {/* Add Admin Form */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl mb-6">
                <h3 className="font-semibold text-gray-800 mb-4">Add New Admin</h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Username"
                    className="flex-1 border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                    value={newAdmin.username}
                    onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="flex-1 border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                    value={newAdmin.password}
                    onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                  />
                  <button
                    onClick={addAdmin}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                  >
                    ➕ Add
                  </button>
                </div>
              </div>

              {/* Admin List */}
              {admins.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <div className="text-5xl mb-3">👥</div>
                  No administrators found
                </div>
              ) : (
                <div className="space-y-3">
                  {admins.map(admin => (
                    <div
                      key={admin._id}
                      className="flex justify-between items-center p-4 border-2 border-gray-100 rounded-xl hover:border-green-200 hover:bg-green-50 transition-all duration-300"
                    >
                      <div>
                        <div className="font-semibold text-gray-800">{admin.username}</div>
                        <div className="text-sm text-gray-500">Role: {admin.role}</div>
                      </div>
                      <button
                        onClick={() => removeAdmin(admin._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        🗑️ Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard