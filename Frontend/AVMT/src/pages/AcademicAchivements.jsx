import { useEffect, useState } from "react";
import { getLatestSessionAchievements } from "../utils/achievementAPI.js";

const AcademicAchievements = () => {
  const [latest, setLatest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestSessionAchievements()
      .then((res) => {
        const data = Array.isArray(res.data.achievements)
          ? res.data.achievements
          : [res.data];

        setLatest(data);
      })
      .catch((err) => console.error("Error fetching latest achievements:", err))
      .finally(() => setLoading(false));
  }, []);

  // ⭐ Skeleton Loader (tiny & responsive)
  const SkeletonCard = () => (
    <div className="w-[70%] sm:w-[45%] md:w-[30%] lg:w-[25%] xl:w-[22%] 
    bg-white shadow-lg rounded-2xl p-3 flex-shrink-0 mx-3 animate-pulse">

      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>

      <div className="mt-4 h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
      <div className="mt-2 h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
      <div className="mt-2 h-3 bg-gray-200 rounded w-1/3 mx-auto"></div>
      <div className="mt-2 h-3 bg-gray-300 rounded w-1/4 mx-auto"></div>
    </div>
  );

  return (
    <div className="px-4 sm:px-6 py-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-700 mb-6 text-center">
        Academic Achievements ({latest?.[0]?.session || "—"})
      </h2>

      {/* ⭐ Scroll Container */}
      <div className="flex gap-6 p-2 overflow-x-auto pb-4 scroll-smooth no-scrollbar snap-x snap-mandatory">

        {/* ⭐ Show Skeleton Cards While Loading */}
        {loading &&
          Array(6)
            .fill(0)
            .map((_, i) => <SkeletonCard key={i} />)}

        {/* ⭐ Actual Data */}
        {!loading &&
          latest?.map((item, index) =>
            item.students.map((stu, i) => (
              <div
                key={`${index}-${i}`}
                className="w-[70%] sm:w-[45%] md:w-[30%] lg:w-[25%] xl:w-[22%] 
                bg-white shadow-lg rounded-2xl border flex-shrink-0 mx-3 p-3 
                snap-center hover:shadow-amber-950 hover:-translate-y-1 transition"
              >
                <div className="flex justify-center">
                  <img
                    src={stu.photo && stu.photo.trim() !== "" ? stu.photo : "/fallback.png"}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover ring-4 ring-yellow-300"
                  />
                </div>

                <h3 className="mt-4 text-lg font-bold text-center">{stu.name}</h3>
                <p className="text-center text-gray-600">Class: {stu.className}</p>
                <p className="text-center text-gray-700">Marks: {stu.marks}</p>
                <p className="text-center text-green-700 font-semibold">
                  {stu.percentage}%
                </p>

                {stu.badge && (
                  <p className="text-center text-yellow-600 font-extrabold mt-1">
                    🏅 {stu.badge}
                  </p>
                )}
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default AcademicAchievements;
