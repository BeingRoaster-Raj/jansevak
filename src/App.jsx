import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Pages
import Home from "./Pages/Home"
import ReportIssue from "./Pages/ReportIssue"
import Reviews from "./Pages/Reviews"
import About from "./Pages/About"
import AdminDashboard from "./Pages/AdminDashboard"
import Badges from "./Pages/Badges"   // ✅ import Badges page

// Protected Route Component
function ProtectedRoute({ children, role, requiredRole }) {
  if (role !== requiredRole) {
    return <Navigate to="/" replace /> // redirect if not allowed
  }
  return children
}

function App() {
  const [role, setRole] = useState(null) // "user" | "admin" | null

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar role={role} setRole={setRole} />
      <main className="flex-grow bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<ReportIssue />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/badges" element={<Badges />} /> {/* ✅ new route */}

          {/* Protected Admin Route */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute role={role} requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
