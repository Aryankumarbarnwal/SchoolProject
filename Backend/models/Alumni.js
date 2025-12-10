import mongoose from "mongoose";

const alumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String },
  position: { type: String },
  batch: { type: String },
  rank: { type: String },
});

export default mongoose.model("Alumni", alumniSchema);
