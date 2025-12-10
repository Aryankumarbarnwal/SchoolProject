import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  className: String,
  percentage: Number,
  badge: String,
  marks: Number,
  photo: String,
  isDistrictTopper: Boolean,
  isStateTopper: Boolean
});

const achievementSchema = new mongoose.Schema({
  session: String,       // "2024-2025"
  board: String,         // "10th"
  students: [studentSchema]
}, { timestamps: true });

export default mongoose.model("Achievement", achievementSchema);
