import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema(
  {
    studentName: String,
    classApplied: String,
    dob: String,
    gender: String,

    address: String,
    city: String,
    state: String,
    pincode: String,

    parentName: String,
    parentPhone: String,
    parentEmail: String,

    previousSchool: String,
    previousClass: String,
    achievements: String,

    preferredContactTime: String,
    notes: String,

    // Files
    documentTC: String,
    document11thProof: String,

    status: { 
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending" 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admission", admissionSchema);
