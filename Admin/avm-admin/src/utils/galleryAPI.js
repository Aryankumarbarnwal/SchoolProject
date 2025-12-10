import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/gallery",
  withCredentials: true,
});

// Get all gallery items (with pagination)
export const getGalleryItems = (page = 1) =>
  api.get(`?page=${page}`);

// Upload
export const uploadGalleryItem = (formData) =>
  api.post("/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Delete image
export const deleteGalleryItem = (id) =>
  api.delete(`/${id}`);

export default {
  getGalleryItems,
  uploadGalleryItem,
  deleteGalleryItem,
};
