import express from "express"
import Review from "../models/Review.js"

const router = express.Router()

// 📄 GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 })
    res.json(reviews)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ➕ POST new review (requires login)
router.post("/", async (req, res) => {
  try {
    const { name, review, rating, userId, role } = req.body

    if (!userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized. Please log in first." })
    }

    const newReview = new Review({ name, review, rating, userId })
    await newReview.save()
    res.json(newReview)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// ✏️ PUT update review (only by same user or admin)
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { userId, role } = req.body

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    const review = await Review.findById(id)
    if (!review) {
      return res.status(404).json({ message: "Review not found" })
    }

    // ✅ Allow if same user OR admin
    if (review.userId !== userId && role !== "admin") {
      return res
        .status(403)
        .json({ message: "Forbidden. You cannot edit this review." })
    }

    const updatedReview = await Review.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.json(updatedReview)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// ❌ DELETE review (only by same user or admin)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { userId, role } = req.body

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    const review = await Review.findById(id)
    if (!review) {
      return res.status(404).json({ message: "Review not found" })
    }

    // ✅ Allow if same user OR admin
    if (review.userId !== userId && role !== "admin") {
      return res
        .status(403)
        .json({ message: "Forbidden. You cannot delete this review." })
    }

    await Review.findByIdAndDelete(id)
    res.json({ message: "Review deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
