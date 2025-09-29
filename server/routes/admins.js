import express from "express"
import Admin from "../models/Admin.js"

const router = express.Router()

// 📌 SuperAdmin creates a new admin
router.post("/add", async (req, res) => {
  try {
    const { username, password, role } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" })
    }

    const existing = await Admin.findOne({ username })
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" })
    }

    const newAdmin = new Admin({ username, password, role: role || "admin" })
    await newAdmin.save()
    res.json(newAdmin)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// 📌 Admin login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid username" });
    }

    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful", role: admin.role });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


// 📌 Get all admins
router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find()
    res.json(admins)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// 📌 Delete admin
router.delete("/:id", async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id)
    res.json({ message: "Admin removed" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
