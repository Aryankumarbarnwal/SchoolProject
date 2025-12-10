// src/pages/EditNotice.jsx

import { useEffect, useState } from "react";
import { getNoticeById, updateNotice } from "../utils/noticeAPI";
import { useParams, useNavigate } from "react-router-dom";

const EditNotice = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "General",
    audience: "Public",
    image: "",
    status: "published",
  });

  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch notice details
  useEffect(() => {
    getNoticeById(id)
      .then((res) => {
        const data = res.data;

        setForm({
          title: data.title,
          description: data.description,
          category: data.category,
          audience: data.audience,
          image: data.image || "",
          status: data.status || "published",
        });

        setPreview(data.image || "");
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching notice:", err);
        setLoading(false);
      });
  }, [id]);


  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // If user is typing image URL, update preview
    if (e.target.name === "image") {
      setPreview(e.target.value);
    }
  };


  // Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };


  // Submit Updated Notice
  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateNotice(id, form);

    alert("Notice Updated Successfully!");
    navigate("/admin/manage-notices");
  };


  if (loading)
    return (
      <p className="text-center text-gray-700 text-xl font-medium">
        Loading…
      </p>
    );


  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl border">

      <h1 className="text-3xl font-bold text-yellow-700 mb-6">
        Edit Notice
      </h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Title */}
        <div>
          <label className="font-semibold">Notice Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border rounded mt-1"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 border rounded mt-1 h-28"
            required
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="font-semibold">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 border rounded mt-1"
          >
            <option>General</option>
            <option>Holiday</option>
            <option>Exam</option>
            <option>Event</option>
          </select>
        </div>

        {/* Audience */}
        <div>
          <label className="font-semibold">Audience</label>
          <select
            name="audience"
            value={form.audience}
            onChange={handleChange}
            className="w-full p-3 border rounded mt-1"
          >
            <option>Public</option>
            <option>Students</option>
            <option>Teachers</option>
            <option>All</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="font-semibold">Visibility Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-3 border rounded mt-1"
          >
            <option value="published">Show on Home</option>
            <option value="hidden">Hide from Home</option>
          </select>
        </div>

        {/* Image Upload + URL */}
        <div>
          <label className="font-semibold">Notice Image (optional)</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded"
          />

          <p className="text-center text-gray-500 mt-1">OR</p>

          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Paste image URL"
            className="w-full p-2 border rounded"
          />

          {/* Preview */}
          {preview && (
            <img
              src={preview}
              className="mt-3 w-40 h-40 mx-auto border rounded object-cover"
            />
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-semibold text-lg"
        >
          Update Notice
        </button>
      </form>
    </div>
  );
};

export default EditNotice;
