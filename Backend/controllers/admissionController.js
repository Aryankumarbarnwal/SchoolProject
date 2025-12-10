import Admission from "../models/Admission.js";
import cloudinary from "../cloudinaryConfig.js";
import streamifier from "streamifier";

// Upload Helper Function
const uploadToCloud = (buffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      { folder },
      (err, result) => {
        if (err) return reject(err);
        resolve(result.secure_url);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// Create Admission
export const createAdmission = async (req, res) => {
  try {
    const data = req.body;

    let tcUrl = null;
    let proofUrl = null;

    // If TC file exists
    if (req.files?.documentTC?.length > 0) {
      tcUrl = await uploadToCloud(
        req.files.documentTC[0].buffer,
        "admission-documents"
      );
    }

    // If 11th proof exists
    if (req.files?.document11thProof?.length > 0) {
      proofUrl = await uploadToCloud(
        req.files.document11thProof[0].buffer,
        "admission-documents"
      );
    }

    const newAdmission = await Admission.create({
      ...data,
      documentTC: tcUrl,
      document11thProof: proofUrl,
    });

    res.status(201).json({
      message: "Admission form submitted successfully",
      data: newAdmission,
    });

  } catch (error) {
    console.error("ADMISSION CREATE ERROR:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


// ----------------------
// GET ALL ADMISSIONS
// ----------------------
export const getAdmissions = async (req, res) => {
  try {
    const list = await Admission.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (error) {
    console.error("FETCH ERROR:", error);
    res.status(500).json({ message: "Cannot fetch admissions", error });
  }
};

export const updateAdmissionStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const updated = await Admission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({ message: "Status updated", updated });

  } catch (err) {
    res.status(500).json({ message: "Error updating status", err });
  }
};

