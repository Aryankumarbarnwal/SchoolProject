import express from "express";
import {
  createNotice,
  getNotices,
  getNoticeById,
  updateNotice,
  deleteNotice,
} from "../controllers/noticeController.js";
import { protectAdmin } from "../middleware/adminAuth.js";

const router = express.Router();

// 🔒 Admin Only
router.post("/", protectAdmin, createNotice);
router.put("/:id", protectAdmin, updateNotice);
router.delete("/:id", protectAdmin, deleteNotice);

// 🌍 Public / Students / Teachers
router.get("/", getNotices);
router.get("/:id", getNoticeById);

export default router;
