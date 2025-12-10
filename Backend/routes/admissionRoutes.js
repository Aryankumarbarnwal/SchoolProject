import express from "express";
import multer from "multer";
import { createAdmission, getAdmissions, updateAdmissionStatus } from "../controllers/admissionController.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/",
  upload.fields([
    { name: "documentTC", maxCount: 1 },
    { name: "document11thProof", maxCount: 1 }
  ]),
  createAdmission
);

router.get("/", getAdmissions);
router.patch("/:id/status", updateAdmissionStatus);

router.delete("/:id", async (req, res) => {
  await Admission.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

router.put("/:id/verify", async (req, res) => {
  const updated = await Admission.findByIdAndUpdate(
    req.params.id,
    { verified: true },
    { new: true }
  );
  res.json(updated);
});


export default router;
