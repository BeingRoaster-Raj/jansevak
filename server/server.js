import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"

import reviewRoutes from "./routes/reviews.js"
import issueRoutes from "./routes/Issues.js"
import adminRoutes from "./routes/admins.js"

dotenv.config()
const app = express()

// Middleware should always come first
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/admin", adminRoutes)
app.use("/api/reviews", reviewRoutes)
app.use("/api/issues", issueRoutes)

// Serve static uploads folder
app.use("/uploads", express.static("uploads"))

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ DB Error:", err))

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Jansevak API is running!")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
