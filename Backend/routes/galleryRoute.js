import express from "express";
import multer from "multer";
import { protectAdmin } from "../middleware/adminAuth.js";
import {
  createGalleryItem,
  getGalleryItems,
  deleteGalleryItem,
} from "../controllers/galleryController.js";

const router = express.Router();

// Multer Setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.get("/", getGalleryItems);

router.post(
  "/",
  protectAdmin,
  upload.array("files"),
  createGalleryItem
);

router.delete("/:id", protectAdmin, deleteGalleryItem);

export default router;
