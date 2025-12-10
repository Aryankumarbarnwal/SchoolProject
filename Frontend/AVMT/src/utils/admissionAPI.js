import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/admission",
});

export const createAdmission = (formData) =>
  api.post("/", formData, { headers: { "Content-Type": "multipart/form-data" } });

export const getAllAdmissions = () => api.get("/");
