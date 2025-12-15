import React, { useState } from "react";

const sportsPrograms = [
  { name: "Cricket", level: "District & Zonal Level", highlight: "U-16 team reached district finals 2024." },
  { name: "Football", level: "Inter-School Champion", highlight: "Won 5+ inter-school tournaments in last 3 years." },
  { name: "Kabaddi", level: "State Participation", highlight: "Girls team qualified for state-level championship." },
  { name: "Athletics", level: "Track & Field", highlight: "Multiple medals in 100m, 200m & relay races." },
  { name: "Volleyball", level: "Zonal Finalist", highlight: "Boys team reached zonal semi-finals." },
  { name: "Badminton", level: "Singles & Doubles", highlight: "Students regularly qualify for district rounds." },
];

const getInitialLetter = (name) => {
  const ignore = ["mr", "mr.", "mrs", "ms", "miss", "dr", "er"];
  let parts = name.toLowerCase().split(" ");
  if (ignore.includes(parts[0])) parts.shift();
  return parts[0][0].toUpperCase();
};

const starPlayers = [
  {
    name: "Rohit Kumar",
    className: "10th A",
    sport: "Cricket",
    achievement: "Scored 125* in District Final",
    badge: "District Best Batsman",
  },
  {
    name: "Sneha Verma",
    className: "9th B",
    sport: "Athletics",
    achievement: "Gold in 100m & 200m Sprint",
    badge: "Fastest Girl (Zone)",
  },
  {
    name: "Aman Singh",
    className: "8th C",
    sport: "Kabaddi",
    achievement: "Captain of State Qualifier Team",
    badge: "Best Raider",
  },
];

const facilities = [
  { title: "Cricket Ground & Practice Nets", desc: "Well-maintained turf wicket with net practice facilities." },
  { title: "Multipurpose Playground", desc: "Used for football, athletics, kabaddi & kho-kho." },
  { title: "Indoor Games Zone", desc: "Badminton, table tennis & indoor fitness activities." },
];

const events = [
  { title: "Annual Sports Day", date: "15 January 2025", sport: "All Sports", time: "09:00 AM", venue: "School Ground" },
  { title: "Inter-School Cricket Tournament", date: "05 February 2025", sport: "Cricket", time: "08:00 AM", venue: "District Stadium" },
  { title: "Selection Trials – Athletics", date: "22 December 2024", sport: "Athletics", time: "07:00 AM", venue: "AVM Ground" },
];

const medalTable = [
  { year: "2023-24", event: "District Athletics Meet", sport: "Athletics", position: "1st", medals: "5 Gold, 3 Silver" },
  { year: "2023-24", event: "Inter-School Cricket Cup", sport: "Cricket", position: "Runner Up", medals: "Trophy + Certificates" },
  { year: "2022-23", event: "Zonal Sports Meet", sport: "Kabaddi", position: "3rd", medals: "1 Bronze" },
];

const coaches = [
  { name: "Mr. Rajesh Sharma", role: "Cricket & Football Coach", exp: "8+ years experience in district coaching." },
  { name: "Ms. Neha Kumari", role: "Athletics & Fitness Trainer", exp: "State-level sprinter & certified trainer." },
  { name: "Mr. Arjun Verma", role: "Kabaddi & Kho-Kho Coach", exp: "Represented state kabaddi team for 3 years." },
];

const Sports = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={
        theme === "light"
          ? "min-h-screen bg-gradient-to-b from-[#fffde7] via-white to-[#e8f5e9] text-gray-900"
          : "min-h-screen bg-slate-950 text-white"
      }
    >

      {/* 🌗 THEME TOGGLE BUTTON */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="fixed z-50 right-5 bottom-5 px-5 py-3 rounded-full bg-white/90 text-black shadow-lg border border-gray-300 hover:bg-white transition"
      >
        {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
      </button>


      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center ${
            theme === "light" ? "opacity-20" : "opacity-30"
          }`}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        ></div>

        <div
          className={`absolute inset-0 ${
            theme === "light"
              ? "bg-gradient-to-b from-[#fff7da]/90 via-white/70 to-[#e8f5e9]/90"
              : "bg-gradient-to-b from-transparent via-[#1b2239]/70 to-[#0f1528]"
          }`}
        ></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="space-y-6 md:w-2/3">
            <p
              className={`uppercase tracking-[0.25em] font-semibold ${
                theme === "light" ? "text-gray-800" : "text-gray-300"
              }`}
            >
              Adarsh Vidya Mandir · Sports Program
            </p>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight ${
                theme === "light"
                  ? "text-gray-900"
                  : "text-white drop-shadow-[0px_2px_3px_rgba(0,0,0,0.6)]"
              }`}
            >
              Where <span className="text-yellow-500">Champions</span> Are Born.
            </h1>

            <p
              className={`text-lg md:text-xl max-w-2xl ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              At AVM, sports is a discipline, a passion and a path to excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold shadow-md hover:bg-yellow-400 transition">
                View Sports Achievements
              </button>

              <button
                className={`px-6 py-3 rounded-full border ${
                  theme === "light"
                    ? "border-yellow-600 text-yellow-700 hover:bg-yellow-50"
                    : "border-yellow-400 text-yellow-300 hover:bg-yellow-400/10"
                } transition`}
              >
                Join a Sport
              </button>
            </div>

            <div className="flex gap-10 pt-4 text-sm font-medium">
              {[
                { label: "Different Sports", value: "10+" },
                { label: "Medals Every Year", value: "50+" },
                { label: "State Level Players", value: "3+" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-yellow-500 text-2xl font-bold">{item.value}</p>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* PROGRAMS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-yellow-500 mb-2">Our Sports Programs</h2>
        <p className={theme === "light" ? "text-gray-700" : "text-gray-300"}>
          From fundamentals to competition, every child finds their sport.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {sportsPrograms.map((sport) => (
            <div
              key={sport.name}
              className={`rounded-xl p-5 transition ${
                theme === "light"
                  ? "bg-white border border-gray-200 text-gray-800 shadow-md"
                  : "bg-slate-900/80 border border-slate-700 text-white shadow-xl"
              }`}
            >
              <div className="flex justify-between mb-3">
                <h3 className="text-xl font-semibold">{sport.name}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-600 border border-yellow-500/40">
                  {sport.level}
                </span>
              </div>
              <p className="text-sm">{sport.highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ STAR PLAYERS */}
      <section
        className={`py-12 ${
          theme === "light" ? "bg-yellow-50" : "bg-slate-900/60"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Star Players of AVM</h2>

          <div className="flex overflow-x-auto gap-4 pb-3">
            {starPlayers.map((p, i) => (
              <div
                key={i}
                className={`min-w-[260px] rounded-xl p-4 flex gap-4 border ${
                  theme === "light"
                    ? "bg-white border-gray-200 shadow-md text-gray-800"
                    : "bg-slate-900/90 border-slate-700 text-white"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-xl font-bold text-black">
                  {getInitialLetter(p.name)}
                </div>
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs opacity-80">
                    {p.className} · {p.sport}
                  </p>
                  <p className="text-xs mt-1">{p.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">Sports Facilities</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((f) => (
            <div
              key={f.title}
              className={`rounded-xl p-5 transition ${
                theme === "light"
                  ? "bg-white border border-gray-200 shadow-md text-gray-800"
                  : "bg-slate-900/80 border border-slate-700 shadow-xl"
              }`}
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section
        className={`py-12 ${
          theme === "light" ? "bg-yellow-50" : "bg-slate-900/80"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Upcoming Sports Events</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {events.map((ev, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 flex flex-col border transition ${
                  theme === "light"
                    ? "bg-white border-gray-200 shadow-md text-gray-800"
                    : "bg-slate-950/70 border-slate-700 shadow-xl"
                }`}
              >
                <p className="text-xs uppercase opacity-70">{ev.sport}</p>
                <h3 className="text-lg font-semibold">{ev.title}</h3>
                <p className="text-sm opacity-80">{ev.date} · {ev.time}</p>
                <p className="text-xs mt-1">Venue: {ev.venue}</p>

                <button className="mt-4 px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* MEDAL TABLE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">Medal Table (Recent Years)</h2>

        <div
          className={`overflow-x-auto rounded-xl border ${
            theme === "light"
              ? "bg-white border-gray-200 shadow-md"
              : "bg-slate-900/80 border-slate-700 shadow-xl"
          }`}
        >
          <table className="min-w-full text-sm">
            <thead className={theme === "light" ? "bg-gray-100" : "bg-slate-950/80"}>
              <tr>
                <th className="px-4 py-3 text-left">Session</th>
                <th className="px-4 py-3 text-left">Event</th>
                <th className="px-4 py-3 text-left">Sport</th>
                <th className="px-4 py-3 text-left">Position</th>
                <th className="px-4 py-3 text-left">Medals</th>
              </tr>
            </thead>

            <tbody>
              {medalTable.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t ${
                    theme === "light"
                      ? "border-gray-200 even:bg-gray-50"
                      : "border-slate-700 even:bg-slate-900/40"
                  }`}
                >
                  <td className="px-4 py-3">{row.year}</td>
                  <td className="px-4 py-3">{row.event}</td>
                  <td className="px-4 py-3">{row.sport}</td>
                  <td className="px-4 py-3 text-yellow-500 font-semibold">{row.position}</td>
                  <td className="px-4 py-3">{row.medals}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* COACHES */}
      <section
        className={`py-12 ${
          theme === "light" ? "bg-yellow-50" : "bg-slate-900/90"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Our Coaches & Mentors</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {coaches.map((c, i) => (
              <div
                key={i}
                className={`rounded-xl p-5 border transition ${
                  theme === "light"
                    ? "bg-white border-gray-200 shadow-md text-gray-800"
                    : "bg-slate-950/70 border-slate-700 shadow-xl"
                }`}
              >
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="text-sm text-yellow-500">{c.role}</p>
                <p className="text-sm mt-1">{c.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* JOIN A SPORT FORM */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div
          className={`rounded-2xl p-7 border transition ${
            theme === "light"
              ? "bg-white border-gray-200 shadow-md text-gray-800"
              : "bg-slate-900/90 border-yellow-500/40 shadow-xl"
          }`}
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-3">Want to Join a Sport?</h2>

          <form className="grid gap-4 md:grid-cols-2">
            <div>
              <label>Student Name</label>
              <input className="w-full bg-gray-100 rounded-lg px-3 py-2" />
            </div>

            <div>
              <label>Class</label>
              <input className="w-full bg-gray-100 rounded-lg px-3 py-2" />
            </div>

            <div>
              <label>Preferred Sport</label>
              <select className="w-full bg-gray-100 rounded-lg px-3 py-2">
                <option>Select sport</option>
                {sportsPrograms.map((sp) => (
                  <option key={sp.name}>{sp.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Contact Number</label>
              <input className="w-full bg-gray-100 rounded-lg px-3 py-2" />
            </div>

            <div className="md:col-span-2">
              <label>Anything we should know?</label>
              <textarea className="w-full bg-gray-100 rounded-lg px-3 py-2" rows="3" />
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button className="px-6 py-3 bg-yellow-500 rounded-full text-black font-semibold hover:bg-yellow-400">
                Submit Interest Form
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Sports;
