// src/pages/AcademicAchievements.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { getLatestSessionAchievements } from "../utils/achievementAPI.js";

const AcademicAchievements = () => {
  const [latest, setLatest] = useState(null);
  
    useEffect(() => {
      getLatestSessionAchievements().then((res) => {
        console.log(res.data);
        // setLatest(res.data);
        // If backend returns { achievements: [...] }
        if (Array.isArray(res.data.achievements)) {
          setLatest(res.data.achievements);
        } else {
          // If backend returns only one object
          setLatest([res.data]);
        }
      }).catch((err) => {
        console.error("Error fetching latest achievements:", err);
      });
    }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-yellow-700 mb-6 text-center">
          Academic Achievements ({latest?.[0]?.session || "—"})
        </h2>

        {/* If no data */}
        {!latest ? (
          <p className="text-center text-gray-600">Loading achievements...</p>
        ) : latest.students?.length === 0 ? (
          <p className="text-center text-gray-600">No achievements yet.</p>
        ) : (

          // Horizontal Scrollable Cards
          <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar">

            {latest.map((item, index) =>
              item.students.map((stu, i) => (
                <div
                  key={`${index}-${i}`}
                  className="min-w-[250px] max-w-[250px] bg-yellow-50 p-5 rounded-xl shadow hover:shadow-xl border flex-shrink-0"
                >
                  <img
                    src={stu.photo}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    {stu.name}
                  </h3>
                  <p className="text-center text-gray-600">Class : {stu.className}</p>
                  <p className="text-center text-gray-600">Marks : {stu.marks}</p>
                  <p className="text-center text-green-700 font-semibold"> Percentage:
                    {stu.percentage}%
                  </p>
                  {stu.badge && (
                    <p className="text-center text-yellow-700 font-bold">
                      {stu.badge}
                    </p>
                  )}
                </div>
              ))
            )}

          </div>
        )}
    </div>
  );
};

export default AcademicAchievements;
