import express from "express";
import multer from "multer";
import { submitQuery, getAllQueries, updateStatus } from "../controllers/contactController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.fields([{ name: "file", maxCount: 1 }]), submitQuery);
router.get("/", getAllQueries);
router.put("/:id", updateStatus);

export default router;
