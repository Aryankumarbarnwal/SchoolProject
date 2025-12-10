import axios from "axios";

const publicAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/achievements`,
});

export const getAllAchievements = () => publicAPI.get("/all-sessions");
export const getLatestSessionAchievements = () => publicAPI.get("/latest");
