import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    thumb: { type: String }, // optional thumbnail for video
    type: { type: String, enum: ["image", "video", "event"], required: true },
    caption: { type: String },
    event: { type: String },
    cloudinaryId: { type: String }, // needed for deleting
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);
