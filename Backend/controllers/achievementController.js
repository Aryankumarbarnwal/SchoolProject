// achievementController.js
import Achievement from "../models/Achievement.js";

// Current session
export const getCurrentSession = async (req, res) => {
  const currentYear = "2024-2025"; // aap dynamic bana sakte ho
  const data = await Achievement.find({ session: currentYear });
  res.json(data);
};

// All sessions
export const getAllSessions = async (req, res) => {
  const data = await Achievement.find({});
  res.json(data);
};

// Add achievement (admin)
export const addAchievement = async (req, res) => {
  const newAchievement = new Achievement(req.body);
  await newAchievement.save();
  res.status(201).json(newAchievement);
};

// Get single achievement
export const getAchievementById = async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement) return res.status(404).json({ message: "Not Found" });
    res.json(achievement);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update achievement
export const updateAchievement = async (req, res) => {
  try {
    const updated = await Achievement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Not Found" });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete achievement
export const deleteAchievement = async (req, res) => {
  try {
    const deleted = await Achievement.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not Found" });

    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getLatestAchievement = async (req, res) => {
  try {
    // Get all achievements sorted by session (desc)
    const all = await Achievement.find().sort({ session: -1 });

    if (!all.length) {
      return res.status(404).json({ message: "No achievements found" });
    }

    // Extract the newest session from sorted list
    const latestSession = all[0].session;

    // Filter all achievements that belong to latest session
    const latestAchievements = all.filter(
      (item) => item.session === latestSession
    );

    res.json({
      session: latestSession,
      achievements: latestAchievements,
    });
  } catch (error) {
    console.error("Latest Achievement Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
