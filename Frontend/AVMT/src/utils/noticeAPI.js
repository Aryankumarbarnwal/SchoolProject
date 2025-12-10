// src/utils/noticeAPI.js

import axios from "axios";

const noticeAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/notices`,
  withCredentials: true,
});

// CREATE
export const createNotice = (data) => noticeAPI.post("/", data);

// GET ALL (with optional audience)
export const getNotices = (audience = "") =>
  noticeAPI.get(`/?audience=${audience}`);

// GET PUBLIC FOR HOMEPAGE
export const getPublicHomepageNotices = () =>
  noticeAPI.get("/?audience=Public&homepage=true");

// GET ONE
export const getNoticeById = (id) => noticeAPI.get(`/${id}`);

// UPDATE
export const updateNotice = (id, data) => noticeAPI.put(`/${id}`, data);

// DELETE
export const deleteNotice = (id) => noticeAPI.delete(`/${id}`);

export default noticeAPI;
