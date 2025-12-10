// src/pages/ViewAchievements.jsx

import { useEffect, useState } from "react";
import { getAchievements, deleteAchievement } from "../utils/achievementAPI";
import SessionSection from "../components/Achievement/SessionSection";
import { useNavigate } from "react-router-dom";

const ViewAchievements = () => {
  const [grouped, setGrouped] = useState({});
  const navigate = useNavigate();

  const fetchData = async () => {
     try {
      const res = await getAchievements(); // Correct route
      const achievements = res.data; // backend returns array directly

      const groupedData = {};
      achievements.forEach((a) => {
        if (!groupedData[a.session]) groupedData[a.session] = [];
        groupedData[a.session].push(a);
      });

      setGrouped(groupedData);
    } catch (error) {
      console.error("Fetching error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteAchievement(id);
    fetchData();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Achievements</h1>

      {Object.keys(grouped).map((session) => (
        <SessionSection
          key={session}
          session={session}
          items={grouped[session]}
          onEdit={(id) => navigate(`/admin/edit/${id}`)}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ViewAchievements;
