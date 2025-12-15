import React, { useMemo, useState } from "react";

/* ---------- Utils ---------- */
const getInitialLetter = (name = "") => {
  const ignore = ["mr", "mr.", "mrs", "mrs.", "ms", "miss", "dr", "dr.", "er", "er."];
  const parts = name.toLowerCase().split(" ");
  if (ignore.includes(parts[0])) parts.shift();
  return parts[0]?.charAt(0).toUpperCase() || "?";
};

const extractRankValue = (rank = "") => {
  const num = parseInt(rank);
  if (!isNaN(num)) return num;
  if (rank.toLowerCase().includes("top")) return 0;
  return 999;
};

/* ---------- STATIC DATA ---------- */
const dummyAlumni = [
  { id: 1, name: "Mr. Aryan Raj", company: "Google", position: "Software Engineer", batch: "2021", rank: "2nd Rank in 10th Board" },
  { id: 2, name: "Priya Sharma", company: "Microsoft", position: "Product Manager", batch: "2020", rank: "3rd Rank" },
  { id: 3, name: "Ravi Verma", company: "Amazon", position: "Data Scientist", batch: "2022", rank: "Topper" },
  { id: 4, name: "Er. Sneha Kapoor", company: "Meta", position: "UI/UX Designer", batch: "2019", rank: "5th Rank" },
  { id: 5, name: "Dr. Kunal Kumar", company: "TCS", position: "ML Engineer", batch: "2018", rank: "Top 10" },
  { id: 6, name: "Ms. Riya Thakur", company: "Infosys", position: "System Analyst", batch: "2017", rank: "Top Performer" },
  { id: 7, name: "Aman Singh", company: "Byju's", position: "Physics Faculty", batch: "2016", rank: "Top 3" },
  { id: 8, name: "Madhuri Jain", company: "Zomato", position: "Marketing Lead", batch: "2015", rank: "5th Rank" },
];

const AlumniIndex = () => {
  const [visible, setVisible] = useState(6);
  const [mode, setMode] = useState("slider");

  /* ---------- Sorted Alumni ---------- */
  const alumni = useMemo(() => {
    return [...dummyAlumni].sort(
      (a, b) => extractRankValue(a.rank) - extractRankValue(b.rank)
    );
  }, []);

  const displayed = alumni.slice(0, visible);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

      {/* ---------- Header ---------- */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Our Alumni
        </h1>

        <select
          aria-label="Select alumni view"
          className="p-2 rounded-xl border bg-gray-100 text-gray-700 shadow-sm focus:ring-2 ring-yellow-500"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="slider">Slider View</option>
          <option value="grid">Grid View</option>
        </select>
      </div>

      {/* ----------------------------------
            SLIDER MODE (Improved)
      ---------------------------------- */}
      {mode === "slider" && (
        <div className="overflow-x-auto p-2 pb-4 scrollbar-none snap-x snap-mandatory whitespace-nowrap">

          {alumni.map((a) => (
            <div
              key={a.id}
              className="inline-block snap-center w-[220px] sm:w-[260px] mx-3 bg-white rounded-3xl p-5 shadow-lg hover:shadow-2xl border transition hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-md transition hover:scale-110">
                  <span className="text-3xl font-bold text-white">
                    {getInitialLetter(a.name)}
                  </span>
                </div>
              </div>

              <h2 className="text-lg font-semibold text-center">{a.name}</h2>
              <p className="text-sm text-gray-600 text-center">{a.rank}</p>
              <p className="text-sm font-medium text-center mt-1">
                {a.position}{" "}
                <span className="text-yellow-700">@ {a.company}</span>
              </p>
              <p className="text-xs text-gray-500 text-center">Batch {a.batch}</p>
            </div>
          ))}
        </div>
      )}

      {/* ----------------------------------
            GRID MODE (Improved)
      ---------------------------------- */}
      {mode === "grid" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {displayed.map((a) => (
              <div
                key={a.id}
                className="bg-white rounded-3xl p-5 shadow-md hover:shadow-xl border transition hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-md hover:scale-110 transition">
                    <span className="text-3xl font-bold text-white">
                      {getInitialLetter(a.name)}
                    </span>
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-center">{a.name}</h2>
                <p className="text-sm text-gray-700 text-center">{a.rank}</p>
                <p className="text-sm text-center mt-1">
                  {a.position}{" "}
                  <span className="text-yellow-700">@ {a.company}</span>
                </p>
                <p className="text-sm text-gray-500 text-center">Batch {a.batch}</p>
              </div>
            ))}

          </div>

          {visible < alumni.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setVisible((v) => v + 3)}
                className="px-6 py-2 bg-yellow-600 text-white rounded-full font-semibold shadow-lg hover:bg-yellow-700 transition"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AlumniIndex;
