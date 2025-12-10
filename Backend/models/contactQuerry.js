import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    category: String,
    message: String,
    fileUrl: String,
    
    status: {
      type: String,
      enum: ["pending", "viewed", "resolved"],
      default: "pending",
    }
  },
  { timestamps: true }
);

export default mongoose.model("ContactQuery", contactSchema);
