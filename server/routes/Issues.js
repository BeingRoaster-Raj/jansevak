import express from "express"
import multer from "multer"
import path from "path"
import fs from "fs"
import Issue from "../models/Issue.js"

const router = express.Router()

// 📂 Ensure uploads folder exists
const uploadDir = "uploads"
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir)
  console.log("📂 Created uploads folder")
}

// 📸 Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  },
})
const upload = multer({ storage })

// ➕ POST: Create new issue
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const { title, description, category, location, userId } = req.body

    // ✅ Require login
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized. Please log in first." })
    }

    if (!title || !description || !location) {
      return res.status(400).json({ message: "Missing required fields" })
    }

    const newIssue = new Issue({
      title,
      description,
      category,
      location,
      userId, // ✅ now stored
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
    })

    const savedIssue = await newIssue.save()
    console.log("✅ Issue Saved:", savedIssue)

    res.json(savedIssue)
  } catch (err) {
    console.error("❌ Error saving issue:", err)
    res.status(500).json({ message: "Server Error", error: err.message })
  }
})

// 📄 GET: All issues
router.get("/", async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 })
    res.json(issues)
  } catch (err) {
    console.error("❌ Error fetching issues:", err)
    res.status(500).json({ message: "Server Error", error: err.message })
  }
})

export default router
