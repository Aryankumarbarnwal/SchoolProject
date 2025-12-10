// src/pages/Dashboard.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAchievements } from "../utils/achievementAPI";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalSessions: 0,
    totalAchievements: 0,
    totalStudents: 0
  });

  const fetchStats = async () => {
    try {
      const res = await getAchievements();
      const achievements = res.data;

      const sessions = new Set();
      let studentCount = 0;

      achievements.forEach((a) => {
        sessions.add(a.session);
        studentCount += a.students?.length || 0;
      });

      setStats({
        totalSessions: sessions.size,
        totalAchievements: achievements.length,
        totalStudents: studentCount
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="p-6">

      {/* Dashboard Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Dashboard
      </h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-yellow-200 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-yellow-800 mb-2">Total Sessions</h3>
          <p className="text-4xl font-extrabold text-gray-900">{stats.totalSessions}</p>
        </div>

        <div className="p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-yellow-200 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-yellow-800 mb-2">Achievements Added</h3>
          <p className="text-4xl font-extrabold text-gray-900">{stats.totalAchievements}</p>
        </div>

        <div className="p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-yellow-200 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-yellow-800 mb-2">Students Recorded</h3>
          <p className="text-4xl font-extrabold text-gray-900">{stats.totalStudents}</p>
        </div>

      </div>

      {/* Quick Actions Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link
          to="/admin/add-achievement"
          className="p-6 bg-yellow-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-yellow-700 transition text-center"
        >
          ➕ Add Achievement
        </Link>

        <Link
          to="/admin/view-achievements"
          className="p-6 bg-yellow-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-yellow-600 transition text-center"
        >
          📜 View All Achievements
        </Link>

        <Link
          to="/admin/about"
          className="p-6 bg-yellow-400 text-white font-semibold rounded-2xl shadow-lg hover:bg-yellow-500 transition text-center"
        >
          ℹ️ About This Panel
        </Link>

      </div>
    </div>
  );
};

export default Dashboard;
