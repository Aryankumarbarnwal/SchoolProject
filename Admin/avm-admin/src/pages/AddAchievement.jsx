// src/pages/AddAchievement.jsx

import AddAchievementForm from "../components/Achievement/AddAchievementForm";
import { createAchievement } from "../utils/achievementAPI"
import { useNavigate } from "react-router-dom";

const AddAchievement = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await createAchievement(data);
      alert("Achievement Added!");
      navigate("/admin/view-achievements");
    } catch (error) {
      console.error("Error adding achievement:", error);
      alert("Error adding achievement");
    }
  };

  return (
    <div>
      <AddAchievementForm onSubmit={handleSubmit} btnText="Add Achievement" />
    </div>
  );
};

export default AddAchievement;
