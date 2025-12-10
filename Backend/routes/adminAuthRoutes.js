import express from "express";
import { loginAdmin, getAdminProfile, logoutAdmin } from "../controllers/adminAuthController.js";
import { protectAdmin } from "../middleware/adminAuth.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/me", protectAdmin, getAdminProfile);
router.post("/logout", protectAdmin, logoutAdmin);

export default router;
