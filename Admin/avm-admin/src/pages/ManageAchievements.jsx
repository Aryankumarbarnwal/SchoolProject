// src/pages/ManageAchievements.jsx

import { useEffect, useState } from "react";
import { getAchievements, deleteAchievement } from "../utils/achievementAPI";
import AchievementCard from "../components/Achievement/AchievementCard";
import { Link, useNavigate } from "react-router-dom";

const ManageAchievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await getAchievements();
      setAchievements(res.data);
      setFiltered(res.data);
    } catch (error) {
      console.error("Error fetching achievements:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔍 Search Achievements
  const handleSearch = (value) => {
    setQuery(value);

    const q = value.toLowerCase();
    const result = achievements.filter((a) =>
      a.session.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
    );

    setFiltered(result);
  };

  // 🗑 Delete Achievement
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this achievement?")) {
      await deleteAchievement(id);
      fetchData();
    }
  };

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Achievements</h1>

        <Link
          to="/admin/add-achievement"
          className="px-5 py-3 bg-yellow-600 text-white rounded-xl shadow hover:bg-yellow-700 transition"
        >
          + Add New Achievement
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by session or category..."
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Achievements List */}
      {filtered.length === 0 ? (
        <p className="text-gray-600">No achievements found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((ach) => (
            <AchievementCard
              key={ach._id}
              ach={ach}
              onEdit={() => navigate(`/admin/edit/${ach._id}`)}
              onDelete={() => handleDelete(ach._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageAchievements;
