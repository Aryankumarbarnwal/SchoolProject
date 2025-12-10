import React from "react";

const sportsPrograms = [
  {
    name: "Cricket",
    level: "District & Zonal Level",
    highlight: "U-16 team reached district finals 2024.",
  },
  {
    name: "Football",
    level: "Inter-School Champion",
    highlight: "Won 5+ inter-school tournaments in last 3 years.",
  },
  {
    name: "Kabaddi",
    level: "State Participation",
    highlight: "Girls team qualified for state-level championship.",
  },
  {
    name: "Athletics",
    level: "Track & Field",
    highlight: "Multiple medals in 100m, 200m & relay races.",
  },
  {
    name: "Volleyball",
    level: "Zonal Finalist",
    highlight: "Boys team reached zonal semi-finals.",
  },
  {
    name: "Badminton",
    level: "Singles & Doubles",
    highlight: "Students regularly qualify for district rounds.",
  },
];
const getInitialLetter = (name) => {
  if (!name) return "?";

  const ignore = ["mr", "mr.", "mrs", "mrs.", "ms", "miss", "dr", "dr.", "er", "er."];
  let parts = name.toLowerCase().split(" ");

  if (ignore.includes(parts[0])) parts.shift();

  return parts[0]?.charAt(0).toUpperCase() || "?";
};

const starPlayers = [
  {
    name: "Rohit Kumar",
    className: "10th A",
    sport: "Cricket",
    achievement: "Scored 125* in District Final",
    badge: "District Best Batsman",
    photo: "https://via.placeholder.com/80",
  },
  {
    name: "Sneha Verma",
    className: "9th B",
    sport: "Athletics",
    achievement: "Gold in 100m & 200m Sprint",
    badge: "Fastest Girl (Zone)",
    photo: "https://via.placeholder.com/80",
  },
  {
    name: "Aman Singh",
    className: "8th C",
    sport: "Kabaddi",
    achievement: "Captain of State Qualifier Team",
    badge: "Best Raider",
    photo: "https://via.placeholder.com/80",
  },
];

const facilities = [
  {
    title: "Cricket Ground & Practice Nets",
    desc: "Well-maintained turf wicket with net practice facilities.",
  },
  {
    title: "Multipurpose Playground",
    desc: "Used for football, athletics, kabaddi & kho-kho.",
  },
  {
    title: "Indoor Games Zone",
    desc: "Badminton, table tennis & indoor fitness activities.",
  },
];

const events = [
  {
    title: "Annual Sports Day",
    date: "15 January 2025",
    time: "09:00 AM",
    sport: "All Sports",
    venue: "School Ground",
  },
  {
    title: "Inter-School Cricket Tournament",
    date: "05 February 2025",
    time: "08:00 AM",
    sport: "Cricket",
    venue: "District Stadium",
  },
  {
    title: "Selection Trials – Athletics",
    date: "22 December 2024",
    time: "07:00 AM",
    sport: "Athletics",
    venue: "AVM Ground",
  },
];

const medalTable = [
  {
    year: "2023-24",
    event: "District Athletics Meet",
    sport: "Athletics",
    position: "1st",
    medals: "5 Gold, 3 Silver",
  },
  {
    year: "2023-24",
    event: "Inter-School Cricket Cup",
    sport: "Cricket",
    position: "Runner Up",
    medals: "Trophy + Certificates",
  },
  {
    year: "2022-23",
    event: "Zonal Sports Meet",
    sport: "Kabaddi",
    position: "3rd",
    medals: "1 Bronze",
  },
];

const coaches = [
  {
    name: "Mr. Rajesh Sharma",
    role: "Cricket & Football Coach",
    exp: "8+ years experience in coaching at district level.",
  },
  {
    name: "Ms. Neha Kumari",
    role: "Athletics & Fitness Trainer",
    exp: "State-level sprinter & certified fitness trainer.",
  },
  {
    name: "Mr. Arjun Verma",
    role: "Kabaddi & Kho-Kho Coach",
    exp: "Represented state kabaddi team for 3 years.",
  },
];

const Sports = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white top-0.5 relative rounded-lg overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">

        {/* Muted darker overlay to reduce contrast */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        ></div>

        {/* Smooth blend with navbar (cream → navy) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff7da] via-[#1b2239]/70 to-[#0f1528]"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">

          {/* Left Side */}
          <div className="space-y-6 md:w-2/3">

            <p className="uppercase tracking-[0.25em] text-[#000000] font-semibold">
              Adarsh Vidya Mandir · Sports Program
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-[0px_2px_3px_rgba(0,0,0,0.6)]">
              Where <span className="text-[#f5c542]">Champions</span> Are Born.
            </h1>

            <p className="text-[#e8e8e8] text-lg md:text-xl max-w-2xl">
              At AVM, sports is a discipline, a passion and a path to excellence.
              We nurture physical strength, mental toughness and true team spirit.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-full bg-[#f5c542] text-[#1a1d2c] font-semibold shadow-md hover:bg-[#eaba36] transition">
                View Sports Achievements
              </button>

              <button className="px-6 py-3 rounded-full border border-[#f5c542] text-[#f5c542] hover:bg-[#f5c542]/10 transition">
                Join a Sport
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-4 text-sm text-[#e6e6e6] font-medium">
              <div>
                <p className="text-[#f5c542] text-2xl font-bold">10+</p>
                <p>Different Sports</p>
              </div>

              <div>
                <p className="text-[#f5c542] text-2xl font-bold">50+</p>
                <p>Medals Every Year</p>
              </div>

              <div>
                <p className="text-[#f5c542] text-2xl font-bold">3+</p>
                <p>State Level Players</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="md:w-1/3">
            <div className="bg-[#131a2c]/80 border border-[#f5c542]/30 rounded-2xl p-6 shadow-xl backdrop-blur">
              <h3 className="text-lg font-semibold text-[#f5c542] mb-2">
                Latest Highlight
              </h3>
              <p className="text-sm text-[#e2e2e2]">
                <span className="font-bold">District Athletics Meet 2024</span> – AVM secured
                <span className="text-[#f5c542] font-semibold"> 3 Gold & 2 Silver </span>
                medals in track events.
              </p>
              <p className="text-xs text-[#a3a3a3] mt-2">
                Updated: November 2024 · Sports Department
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* OUR SPORTS PROGRAMS */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-yellow-300">
              Our Sports Programs
            </h2>
            <p className="text-slate-300 text-sm md:text-base">
              From fundamentals to competition, every child finds their sport.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sportsPrograms.map((sport) => (
            <div
              key={sport.name}
              className="bg-slate-900/80 border border-slate-700 rounded-xl p-5 hover:border-yellow-400 hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">
                  {sport.name}
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-500/40">
                  {sport.level}
                </span>
              </div>
              <p className="text-sm text-slate-300 mb-4">{sport.highlight}</p>
              <button className="text-sm text-yellow-300 hover:underline">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* STAR PLAYERS */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-yellow-300">
              Star Players of AVM
            </h2>
            <p className="text-sm text-slate-300">
              Students who made us proud at district & state level.
            </p>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            {starPlayers.map((p, i) => (
              <div
                key={i}
                className="min-w-[260px] bg-slate-900/90 border border-slate-700 rounded-xl p-4 flex gap-3"
              >
                <span className="w-16 h-16 rounded-full text-2xl text-shadow-black items-center flex justify-center object-cover border border-yellow-400">
                  {getInitialLetter(p.name)}
                </span>
                <div>
                  <p className="font-semibold text-white">{p.name}</p>
                  <p className="text-xs text-slate-300">
                    {p.className} · {p.sport}
                  </p>
                  <p className="text-xs text-slate-200 mt-1">
                    {p.achievement}
                  </p>
                  <span className="inline-block mt-2 text-[11px] px-2 py-1 bg-yellow-400/15 text-yellow-300 rounded-full border border-yellow-500/40">
                    ⭐ {p.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">
          Sports Facilities
        </h2>
        <p className="text-slate-300 text-sm md:text-base mb-6">
          We believe great players need great infrastructure. Our campus
          provides safe, spacious and well-maintained sports facilities.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((f) => (
            <div
              key={f.title}
              className="bg-slate-900/80 border border-slate-700 rounded-xl p-5 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-white">
                {f.title}
              </h3>
              <p className="text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-slate-900/80 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-300 mb-4">
            Upcoming Sports Events
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {events.map((ev, i) => (
              <div
                key={i}
                className="bg-slate-950/70 border border-slate-700 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">
                    {ev.sport}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {ev.title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {ev.date} · {ev.time}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Venue: {ev.venue}
                  </p>
                </div>
                <button className="mt-4 px-4 py-2 rounded-full bg-yellow-400 text-slate-900 text-sm font-semibold hover:bg-yellow-300">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDAL TABLE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">
          Medal Table (Recent Years)
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900/80">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-950/80 text-slate-200">
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
                  className={`border-t border-slate-700 ${i % 2 === 0 ? "bg-slate-900/60" : "bg-slate-900/40"
                    }`}
                >
                  <td className="px-4 py-3">{row.year}</td>
                  <td className="px-4 py-3">{row.event}</td>
                  <td className="px-4 py-3">{row.sport}</td>
                  <td className="px-4 py-3 text-yellow-300 font-semibold">
                    {row.position}
                  </td>
                  <td className="px-4 py-3">{row.medals}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* COACHES SECTION */}
      <section className="bg-slate-900/90 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-300 mb-4">
            Our Coaches & Mentors
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {coaches.map((c, i) => (
              <div
                key={i}
                className="bg-slate-950/70 border border-slate-700 rounded-xl p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {c.name}
                </h3>
                <p className="text-sm text-yellow-300 mb-1">{c.role}</p>
                <p className="text-sm text-slate-300">{c.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN A SPORT */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-slate-900/90 border border-yellow-500/40 rounded-2xl p-7 shadow-2xl">
          <h2 className="text-3xl font-bold text-yellow-300 mb-3">
            Want to Join a Sport?
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-6">
            Fill this interest form and our sports department will guide you
            about practice timings, selection trials and training plans.
          </p>
          <form className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="block text-sm mb-1">Student Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter full name"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm mb-1">Class</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g., 8th A"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm mb-1">Preferred Sport</label>
              <select className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="">Select sport</option>
                {sportsPrograms.map((sp) => (
                  <option key={sp.name} value={sp.name}>
                    {sp.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm mb-1">Contact Number</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Parent / Guardian contact"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">
                Anything we should know?
              </label>
              <textarea
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="3"
                placeholder="Previous experience, health notes, goals, etc."
              />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button
                type="button"
                className="px-6 py-3 bg-yellow-400 text-slate-950 font-semibold rounded-full hover:bg-yellow-300 transition"
              >
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
