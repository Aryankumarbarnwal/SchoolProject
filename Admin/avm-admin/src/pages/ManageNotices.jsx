// src/pages/ManageNotices.jsx

import { useEffect, useState } from "react";
import {
  getNotices,
  deleteNotice,
  updateNotice,
} from "../utils/noticeAPI";
import { useNavigate } from "react-router-dom";

const ManageNotices = () => {
  const navigate = useNavigate();

  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const loadNotices = async () => {
    const res = await getNotices(filter === "All" ? "" : filter);
    return res.data;
  };

  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      const data = await loadNotices();
      if (isMounted) setNotices(data);
    };
    fetchData();
    return () => { isMounted = false; };
  }, [filter]);

  const handleDelete = async (id) => {
    if (!confirm("Delete this notice?")) return;
    await deleteNotice(id);
    loadNotices();
  };

  const toggleStatus = async (notice) => {
    await updateNotice(notice._id, {
      status: notice.status === "published" ? "hidden" : "published",
    });
    const data = await loadNotices();
    setNotices(data);
  };

  const filtered = notices.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 p-4">

      {/* Title + Add */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-700">
          Manage Notices
        </h1>

        <button
          onClick={() => navigate("/admin/add-notice")}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
        >
          + Add Notice
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        {["All", "Public", "Students", "Teachers"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-lg border transition ${
              filter === item
                ? "bg-yellow-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search notices..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      {/* Notice List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((notice) => (
          <div
            key={notice._id}
            className="bg-white p-5 shadow rounded-xl border hover:shadow-lg transition"
          >
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800">
              {notice.title}
            </h2>

            {/* Description preview */}
            <p className="text-gray-600 mt-2 line-clamp-2">
              {notice.description}
            </p>

            {/* Image preview */}
            {notice.image && (
              <img
                src={notice.image}
                className="w-full h-40 object-cover rounded mt-3 border"
              />
            )}

            {/* Category + Audience */}
            <p className="mt-2 text-sm text-gray-500">
              Category: {notice.category} | Audience: {notice.audience}
            </p>

            {/* Status Toggle */}
            <button
              onClick={() => toggleStatus(notice)}
              className={`mt-3 px-3 py-1 rounded text-sm ${
                notice.status === "published"
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {notice.status === "published" ? "Published" : "Hidden"}
            </button>

            {/* Actions */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() =>
                  navigate(`/admin/edit-notice/${notice._id}`)
                }
                className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(notice._id)}
                className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-600">No notices found.</p>
      )}
    </div>
  );
};

export default ManageNotices;
