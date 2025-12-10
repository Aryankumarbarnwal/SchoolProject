import Alumni from "../models/Alumni.js";

export const getAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.json(alumni); // MUST return array
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createAlumni = async (req, res) => {
  try {
    const newAlumni = new Alumni(req.body);
    await newAlumni.save();
    res.json(newAlumni);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
