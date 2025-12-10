import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/admission",
});

export const createAdmission = (formData) =>
  api.post("/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getAllAdmissions = () => api.get("/");
