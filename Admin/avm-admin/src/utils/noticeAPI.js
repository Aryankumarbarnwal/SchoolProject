import axios from "axios";

const noticeAPI = axios.create({
  baseURL: "http://localhost:5000/api/notices",
  withCredentials: true,
});

// Create Notice
export const createNotice = (data) => noticeAPI.post("/", data);

// Get All (use audience filter: Public / Students / Teachers / All)
export const getNotices = (audience = "") =>
  noticeAPI.get(`/?audience=${audience}`);

export const addNotice = (data) => noticeAPI.post("/", data);

// Get One
export const getNoticeById = (id) => noticeAPI.get(`/${id}`);

// Update
export const updateNotice = (id, data) => noticeAPI.put(`/${id}`, data);

// Delete
export const deleteNotice = (id) => noticeAPI.delete(`/${id}`);

export default noticeAPI;