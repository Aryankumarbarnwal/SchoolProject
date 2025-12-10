import axios from "axios";

const BASE = "http://localhost:5000/api/admission";

export const getAllAdmissions = () => axios.get(BASE);
export const deleteAdmission = (id) => axios.delete(`${BASE}/${id}`);
export const verifyAdmission = (id) => axios.put(`${BASE}/${id}/verify`);
