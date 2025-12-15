import { useEffect, useState } from "react";
import { getAllAchievements } from "../utils/achievementAPI";
import { motion } from "framer-motion";

const AllAchievements = () => {
  const [grouped, setGrouped] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    getAllAchievements()
      .then((res) => {
        if (!mounted) return;

        const data = res.data || [];
        const groupedData = {};

        data.forEach((a) => {
          if (!groupedData[a.session]) groupedData[a.session] = [];
          groupedData[a.session].push(a);
        });

        setGrouped(groupedData);
      })
      .finally(() => setLoading(false));

    return () => {
      mounted = false; // prevent setState after unmount
    };
  }, []);

  // ⭐ Skeleton Loader
  const SkeletonCard = () => (
    <div className="bg-white/60 rounded-2xl p-6 shadow-md animate-pulse">
      <div className="w-24 h-24 mx-auto rounded-full bg-gray-300" />
      <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mt-4" />
      <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto mt-2" />
      <div className="h-3 bg-gray-200 rounded w-1/4 mx-auto mt-2" />
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

      {/* PAGE TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-transparent"
      >
        Academic Achievements
      </motion.h1>

      {/* Show Skeleton While Loading */}
      {loading && (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      )}

      {/* SHOW DATA */}
      {!loading &&
        Object.keys(grouped)
          .sort((a, b) => b.localeCompare(a))
          .map((session) => (
            <div key={session} className="mb-16">

              {/* SESSION HEADER */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8 pl-4 border-l-8 border-yellow-500"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Session {session}
                </h2>
                <p className="text-gray-500">Top Performers & Achievers</p>
              </motion.div>

              {/* GRID OF STUDENTS */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[session].map((ach) =>
                  ach.students.map((stu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.04, y: -4 }}
                      className="relative bg-white/70 backdrop-blur-xl border border-black/20 shadow-xl hover:shadow-amber-950 rounded-2xl p-6 overflow-hidden transition"
                    >
                      {/* Soft Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-red-200 opacity-20 blur-2xl"></div>

                      {/* PHOTO */}
                      <div className="relative flex justify-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-xl overflow-hidden ring-4 ring-yellow-300">
                          <img
                            src={stu.photo && stu.photo.trim() !== "" ? stu.photo : "/fallback-avatar.png"}
                            alt={stu.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* INFO */}
                      <div className="relative text-center mt-4 space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{stu.name}</h3>

                        <p className="text-gray-600">{stu.className}</p>

                        <p className="text-green-700 font-semibold text-lg">
                          {stu.percentage}% – {stu.marks} Marks
                        </p>

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
    </div>
  );
};

export default AllAchievements;
