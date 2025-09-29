import { useEffect, useState } from "react"

function AdminDashboard() {
  const [issues, setIssues] = useState([])
  const [reviews, setReviews] = useState([])
  const [admins, setAdmins] = useState([])
  const [newAdmin, setNewAdmin] = useState({ username: "", password: "" })

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
    await fetch(`http://localhost:5000/api/issues/${id}`, { method: "DELETE" })
    setIssues(issues.filter(issue => issue._id !== id))
  }

  const deleteReview = async (id) => {
    await fetch(`http://localhost:5000/api/reviews/${id}`, { method: "DELETE" })
    setReviews(reviews.filter(review => review._id !== id))
  }

  const addAdmin = async () => {
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
    await fetch(`http://localhost:5000/api/admins/${id}`, { method: "DELETE" })
    setAdmins(admins.filter(admin => admin._id !== id))
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Manage Issues */}
      <h3 className="text-xl font-semibold mt-4 mb-2">Issues</h3>
      <ul>
        {issues.map(issue => (
          <li key={issue._id} className="flex justify-between items-center border-b py-2">
            {issue.title}
            <button onClick={() => deleteIssue(issue._id)} className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Manage Reviews */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Reviews</h3>
      <ul>
        {reviews.map(review => (
          <li key={review._id} className="flex justify-between items-center border-b py-2">
            {review.name} - {review.review}
            <button onClick={() => deleteReview(review._id)} className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Manage Admins */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Admins</h3>
      <div className="mb-3 flex gap-2">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          value={newAdmin.username}
          onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={newAdmin.password}
          onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
        />
        <button onClick={addAdmin} className="bg-green-500 text-white px-3 py-1 rounded">
          Add Admin
        </button>
      </div>

      <ul>
        {admins.map(admin => (
          <li key={admin._id} className="flex justify-between items-center border-b py-2">
            {admin.username} ({admin.role})
            <button onClick={() => removeAdmin(admin._id)} className="bg-red-500 text-white px-3 py-1 rounded">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminDashboard
