import contactQuerry from "../models/contactQuerry.js";
import cloudinary from "../cloudinaryConfig.js";
import streamifier from "streamifier";

const uploadToCloud = (buffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (err, result) => {
        if (err) return reject(err);
        resolve(result.secure_url);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export const submitQuery = async (req, res) => {
  try {
    let fileUrl = null;

    if (req.files?.file) {
      fileUrl = await uploadToCloud(req.files.file[0].buffer, "contact-files");
    }

    const saved = await contactQuerry.create({
      ...req.body,
      fileUrl,
    });

    res.status(201).json({ message: "Query submitted!", data: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getAllQueries = async (req, res) => {
  try {
    const list = await contactQuerry.find().sort({ createdAt: -1 });
    res.json(list);
  } catch {
    res.status(500).json({ message: "Unable to fetch queries" });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const updated = await contactQuerry.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch {
    res.status(500).json({ message: "Could not update status" });
  }
};
