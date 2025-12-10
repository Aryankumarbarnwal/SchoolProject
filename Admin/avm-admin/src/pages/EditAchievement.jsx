// src/pages/EditAchievement.jsx

import { useEffect, useState } from "react";
import { getAchievementById, updateAchievement } from "../utils/achievementAPI";
import AddAchievementForm from "../components/Achievement/AddAchievementForm";
import { useParams, useNavigate } from "react-router-dom";

const EditAchievement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [achievement, setAchievement] = useState(null);

 useEffect(() => {
  getAchievementById(id)
    .then((res) => {
      const data = res.data.data || res.data; // support both formats
      setAchievement(data);
    })
    .catch((err) => {
      console.error("Failed to fetch:", err);
    });
}, [id]);


  const handleSubmit = async (form) => {
    await updateAchievement(id, form);
    alert("Achievement Updated!");
    navigate("../view-achievements");
  };

  if (!achievement) return <p>Loading...</p>;

  return (
    <AddAchievementForm
      initialData={achievement}
      onSubmit={handleSubmit}
      btnText="Update Achievement"
    />
  );
};

export default EditAchievement;
