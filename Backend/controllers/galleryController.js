import Gallery from "../models/Gallery.js"
// import cloudinary from "cloudinary";
import streamifier from "streamifier";
import cloudinary from "../cloudinaryConfig.js";

// console.log("Cloudinary key : ", process.env.CLOUDINARY_API_KEY);
// console.log("Cloudinary NAME : ", process.env.CLOUDINARY_CLOUD_NAME);
// console.log("Cloudinary key : ", process.env.CLOUDINARY_API_SECRET);

// 🔥 Cloudinary Config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper to upload stream
const streamUpload = (buffer, folder, type) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      { folder,
        resource_type: type === "video" ? "video" : "image"
       },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// ⭐ Create Gallery Item
export const createGalleryItem = async (req, res) => {
  try {
    const { type, caption, event } = req.body;
    const files = req.files; // <-- IMPORTANT

    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const uploadedItems = [];

    for (const file of files) {
      if (!file.buffer) continue; // safety check

      const uploaded = await streamUpload(file.buffer, "school-gallery", type);
      let thumbUrl = uploaded.secure_url;

      // if file is video -> generate thumbnail
      if (type === "video") {
        thumbUrl = cloudinary.v2.url(uploaded.public_id + ".jpg", {
          resource_type: "video",
          transformation: [{ width: 500,crop :"scale" }],
        });
      }

      const item = await Gallery.create({
        url: uploaded.secure_url,
        thumb: thumbUrl,
        type,
        caption,
        event,
        cloudinaryId: uploaded.public_id,
      });

      uploadedItems.push(item);
    }

    return res.json({
      message: "Uploaded successfully",
      items: uploadedItems,
    });

  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({ message: "Upload failed", error });
  }
};

// ⭐ Fetch All Gallery Items + Pagination
export const getGalleryItems = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 12;

    const total = await Gallery.countDocuments();
    const items = await Gallery.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      items,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching gallery", error });
  }
};

// ⭐ Delete Gallery Item
export const deleteGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });

    // Delete from cloudinary
    if (item.cloudinaryId) {
      await cloudinary.v2.uploader.destroy(item.cloudinaryId);
    }

    await item.deleteOne();

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error });
  }
};
