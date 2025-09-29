import mongoose from "mongoose"

const issueSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ["Garbage", "Road", "Water", "Other"],
      default: "Other",
    },
    location: { type: String, required: true },
    imageUrl: { type: String },

    
    userId: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.model("Issue", issueSchema)
