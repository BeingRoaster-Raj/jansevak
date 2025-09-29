import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hash in real projects
  role: { type: String, enum: ["superadmin", "admin"], default: "admin" }
})

export default mongoose.model("Admin", adminSchema)
