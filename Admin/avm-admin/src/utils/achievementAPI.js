// src/api/achievementAPI.js

import axios from "axios";

const API_URL = "http://localhost:5000/api/achievements"; 
// Change when deploying

// export const createAchievement = async (data) => {
//     return axios.post(`${API_URL}/create`, data);
// };

// export const getAchievements = async (session) => {
//     return axios.get(`${API_URL}?session=${session || ""}`);
// };

export const getAchievementById = async (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const updateAchievement = async (id, data) => {
    return axios.put(`${API_URL}/${id}`, data);
};

export const deleteAchievement = async (id) => {
    return axios.delete(`${API_URL}/${id}`);
};


// GET all sessions achievements
export const getAchievements = async () => {
    return axios.get(`${API_URL}/all-sessions`);
};

// GET current session achievements
export const getCurrentAchievements = async () => {
    return axios.get(`${API_URL}/current-session`);
};

// POST new achievement
export const createAchievement = async (data) => {
    return axios.post(`${API_URL}/`, data);
};