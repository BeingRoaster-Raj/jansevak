import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    userId: { type: String, required: true }, 
  },
  { timestamps: true }
)

export default mongoose.model("Review", reviewSchema)
