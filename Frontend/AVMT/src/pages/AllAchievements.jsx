// AllAchievements.jsx

import { useEffect, useState } from "react";
import { getAllAchievements } from "../utils/achievementAPI";
import { motion } from "framer-motion";

const AllAchievements = () => {
  const [grouped, setGrouped] = useState({});

  useEffect(() => {
    getAllAchievements().then((res) => {
      const data = res.data || [];

      const groupedData = {};
      data.forEach((a) => {
        if (!groupedData[a.session]) groupedData[a.session] = [];
        groupedData[a.session].push(a);
      });

      setGrouped(groupedData);
    });
  }, []);

  return (
    <div className=" max-w-7xl mx-auto px-6 py-12">

      {/* ⭐ Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 
        bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-transparent"
      >
        Academic Achievements
      </motion.h1>

      {Object.keys(grouped)
        .sort((a, b) => b.localeCompare(a))
        .map((session) => (
          <div key={session} className="mb-16">

            {/* ⭐ Session Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 pl-4 border-l-8 border-yellow-500"
            >
              <h2 className="text-3xl font-bold text-gray-800">
                Session {session}
              </h2>
              <p className="text-gray-500 mt-1">
                Top performers and star achievers of this session
              </p>
            </motion.div>

            {/* ⭐ Achievements Grid */}
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

              {grouped[session].map((ach) =>
                ach.students.map((stu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -6 }}
                    className="relative bg-white/60 backdrop-blur-xl border border-white/40 
                    shadow-xl rounded-2xl p-6 transition overflow-hidden"
                  >
                    {/* Glow ring */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-red-300 opacity-20 blur-3xl"></div>

                    {/* Profile Image */}
                    <div className="relative flex justify-center">
                      <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden ring-4 ring-yellow-300">
                        <img
                          src={stu.photo}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Student Info */}
                    <div className="text-center mt-4 space-y-1">
                      <h3 className="text-xl font-bold text-gray-800">
                        {stu.name}
                      </h3>
                      <p className="text-gray-600">{stu.className}</p>

                      <p className="text-green-700 font-semibold text-lg">
                        {stu.percentage}% – {stu.marks} Marks
                      </p>

                      {/* Medal / Badge */}
                      {stu.badge && (
                        <p className="text-yellow-600 font-bold text-lg">
                          🏅 {stu.badge}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))
              )}

            </div>
          </div>
        ))}

      {/* EXTRA STYLING */}
      <style>{`
        .achievement-card:hover {
          box-shadow: 0 15px 40px rgba(0,0,0,0.18);
        }
      `}</style>

    </div>
  );
};

export default AllAchievements;
