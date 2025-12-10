import express from "express";
import {
  getCurrentSession,
  getAllSessions,
  addAchievement,
  getAchievementById,
  updateAchievement,
  deleteAchievement,
  getLatestAchievement
} from "../controllers/achievementController.js";

const router = express.Router();

// 🔥 ALWAYS PLACE SPECIFIC ROUTES BEFORE DYNAMIC ONES

router.get("/current-session", getCurrentSession);
router.get("/all-sessions", getAllSessions);
router.get("/latest", getLatestAchievement);     // 👈 MUST be here (before /:id)

// CRUD Routes
router.post("/", addAchievement);
router.get("/:id", getAchievementById);
router.put("/:id", updateAchievement);
router.delete("/:id", deleteAchievement);

export default router;
