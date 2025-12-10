import axios from "axios";

const publicAPI = axios.create({
  baseURL: "http://localhost:5000/api/achievements",   // same backend route
});

export const getAllAchievements = () => publicAPI.get("/all-sessions");
export const getLatestSessionAchievements = () => publicAPI.get("/latest");
