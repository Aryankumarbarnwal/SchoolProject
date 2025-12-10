import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/gallery",
  withCredentials: true,
});

export const getGalleryItems = (page = 1) => api.get(`?page=${page}`);

export const uploadGalleryItem = (formData) =>
  api.post("/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteGalleryItem = (id) => api.delete(`/${id}`);
