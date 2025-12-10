import React, { useEffect, useState } from "react";
import AlumniIndex from "./AlumniCard.jsx";
import AcademicAchievements from "./AcademicAchivements.jsx";
import HomeGallerySection from "../components/HomeGallery.jsx";
import SchoolStats from "../components/SchoolStats.jsx";
import Testimonials from "../components/TestiMonials.jsx";
import UpcomingEvents from "../components/UpcomingEvents.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

const mottos = [
  "Shaping Future Leaders Through Knowledge, Values & Discipline",
  "Nurturing Minds. Building Futures.",
  "Education Rooted in Morality & Innovation",
  "Where Discipline Meets Excellence",
  "Learning Today, Leading Tomorrow"
];

const DynamicMotto = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % mottos.length);
        setFade(true);
      }, 500);
    }, 3700);

    return () => clearInterval(interval);
  }, []);

  return { index, fade };
};


const Home = () => {

  const { index, fade } = DynamicMotto();
  const events = [{}];

  return (
    <div className="relative top-0.5 w-full bg-gradient-to-br from-[#e0f2f1] via-white to-[#f1f8e9] rounded-lg overflow-hidden">

      {/* 🌟 HERO SECTION START */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden shadow-2xl">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{
            backgroundImage: "url('./assets/SchoolImage2.png')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 p-10 text-center text-white max-w-4xl animate-fadeSlide">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
            Adarsh Vidya Mandir, Tilokari – Jainagar, Koderma (Jharkhand)
          </h1>

          <p
            className={`text-xl md:text-2xl font-semibold text-yellow-300 mb-6 transition-all duration-700 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            “{mottos[index]}”
          </p>

          <p className="text-lg mb-8 leading-relaxed text-gray-200 max-w-3xl mx-auto">
            Established in 1997 under the leadership of <strong>Shri Neelkanth Kumar</strong>,
            our school continues its journey of excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href="/admission"
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 
                text-white text-lg font-semibold rounded-full shadow-lg glow-btn"
            >
              Apply for Admission
            </a>

            <a
              href="../assets/Prospectus.docx"
              className="px-8 py-3 border-2 border-yellow-400 text-yellow-300 
                text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-500 
                hover:text-black transition-all duration-300"
            >
              Download Prospectus
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 animate-bounceSlow text-white text-3xl">
          ↓
        </div>
      </section>
      {/* 🌟 HERO SECTION END */}

      {/* Divider Wave */}
      <div className="w-full overflow-hidden -mt-4">
        <svg className="w-lg" viewBox="0 0 1440 320">
          <path fill="#f1f8e9" fillOpacity="1" d="M0,64L1440,192L1440,0L0,0Z"></path>
        </svg>
      </div>

      {/* New School Stats Section */}
      <SchoolStats />

      {/* 🟦 Alumni Section */}
      <section className="px-6 py-10">
        <div className="p-6 bg-[#ededf3] bg-opacity-40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            Alumni Portal
          </h2>
          <AlumniIndex />
        </div>
      </section>



      {/* 🟩 Academic Achievements */}
      <section className="relative mt-10 px-6 max-w-7xl mx-auto">
        <div className="bg-white/900 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-white/40">
          <div className="h-2 w-32 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full mx-auto mb-6"></div>

          <AcademicAchievements />

          <div className="my-8 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="flex justify-center">
            <a
              href="/achievements"
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 
                text-white font-semibold rounded-xl shadow-md hover:shadow-xl 
                hover:scale-[1.03] transition-all duration-300"
            >
              View All Achievements →
            </a>
          </div>
        </div>
      </section>

      {/* 🟩 About Preview  */}
      <section className="px-6 py-16">
        <div className="relative max-w-6xl mx-auto">

          {/* Decorative Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-green-600 to-blue-700 rounded-3xl blur-xl opacity-30"></div>

          <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-white/40">

            {/* Section Title */}
            <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent p-1
        bg-gradient-to-r from-green-700 to-blue-700 tracking-wide mb-8">
              About Adarsh Vidya Mandir
            </h2>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Left Text Block */}
              <div className="text-gray-800 text-lg leading-relaxed space-y-5">
                <p>
                  Established in <strong>1997</strong>, Adarsh Vidya Mandir has been a guiding
                  light for quality rural education in Tilokari, Jainagar (Koderma).
                  Our mission is simple — <strong>affordable, value-based & disciplined education</strong>
                  for every child.
                </p>

                <p>
                  With over <strong>650 students</strong> and a dedicated team of teachers,
                  the school continues to achieve excellence in academics, character, and holistic development.
                </p>

                <p>
                  Guided by the vision of <strong>Principal Neelkanth Kumar</strong>,
                  AVM is not just a school — it’s a foundation for future leaders, achievers & patriots.
                </p>

                {/* CTA */}
                <a
                  href="/about"
                  className="inline-block mt-4 px-7 py-3 text-lg font-semibold text-white rounded-full
            bg-gradient-to-r from-green-500 to-blue-600 hover:scale-[1.05] shadow-lg 
            hover:shadow-xl transition-all duration-300"
                >
                  Read Full Story →
                </a>
              </div>

              {/* Right Side – Image + Signature Card */}
              <div className="flex flex-col items-center">

                {/* Principal Photo
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 
            border-white/70">
                  <img
                    src="../Assets/principal.png"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                {/* Avatar (Auto name initial) */}
                <div className="relative">
                  {/* Outer Soft Glow Ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-green-500 rounded-full blur-xl opacity-40"></div>

                  {/* Avatar Circle */}
                  <div className="w-44 h-44 rounded-full bg-gradient-to-br from-yellow-400 to-green-100 
            flex items-center justify-center shadow-2xl border-4 border-white
            text-white text-6xl font-bold select-none
            transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(0,0,0,0.25)]">
                    {(() => {
                      const name = "Mr. Neelkanth Kumar";
                      const ignore = ["mr", "mr.", "mrs", "ms", "miss", "dr", "dr.", "sir", "er"];
                      let parts = name.toLowerCase().split(" ");
                      if (ignore.includes(parts[0])) parts.shift();
                      return parts[0]?.charAt(0).toUpperCase() || "N";
                    })()}
                  </div>
                </div>

                {/* Name + Signature */}
                <div className="text-center mt-4">
                  <p className="text-xl font-bold text-gray-800">Mr. Neelkanth Kumar</p>
                  <p className="text-sm text-gray-500">Founder & Principal</p>

                  {/* Optional signature image */}
                  {/* <img src="/signature.png" className="w-28 mx-auto mt-2 opacity-90" /> */}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/*Facilities Section */}
      <section className="mt-20">
        <div className="bg-gradient-to-br from-[#e8e2e2] via-[#e7e8ec] to-[#ebedec] 
      rounded-3xl shadow-xl border border-white/50 p-12 relative overflow-hidden">

          {/* Decorative Background Blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200 opacity-20 rounded-full blur-3xl"></div>

          <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text
        text-transparent bg-gradient-to-r from-yellow-600 to-green-600">
            Our School Facilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">

            {/* CARD 1 — Smart Classes */}
            <div className="facility-card group">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-box bg-yellow-100">
                    📚
                  </div>
                  <h3 className="card-title">Smart Classes</h3>
                  <p className="card-text">Modern digital classrooms with projector & interactive learning.</p>
                </div>
                <div className="card-back">
                  <p className="back-text">AVM provides modern infrastructure, advanced learning tools, and a safe environment
                    for holistic growth of every child.</p>
                </div>
              </div>
            </div>

            {/* CARD 2 — Library */}
            <div className="facility-card group">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-box bg-green-100">
                    📖
                  </div>
                  <h3 className="card-title">Library</h3>
                  <p className="card-text">A peaceful environment with 2000+ books & study resources.</p>
                </div>
                <div className="card-back">
                  <p className="back-text">Reference materials, magazines & knowledge hub.</p>
                </div>
              </div>
            </div>

            {/* CARD 3 — Computer Lab */}
            <div className="facility-card group">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-box bg-blue-100">
                    💻
                  </div>
                  <h3 className="card-title">Computer Lab</h3>
                  <p className="card-text">Fully equipped lab for practical computer learning.</p>
                </div>
                <div className="card-back">
                  <p className="back-text">Fully equipped computer lab where students learn modern digital skills
                    essential for the future.</p>
                </div>
              </div>
            </div>

            {/* CARD 4 — Transport */}
            <div className="facility-card group">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-box bg-orange-100">
                    🚌
                  </div>
                  <h3 className="card-title">Transport</h3>
                  <p className="card-text">Safe and reliable bus service across nearby areas.</p>
                </div>
                <div className="card-back">
                  <p className="back-text">GPS-enabled routes & trained drivers for safety. Safe and reliable transport covering nearby towns and villages with trained
                    drivers and attendants.</p>
                </div>
              </div>
            </div>

            {/* CARD 5 — Safety / CCTV */}
            <div className="facility-card group">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-box bg-red-100">
                    🎥
                  </div>
                  <h3 className="card-title">24×7 CCTV Security</h3>
                  <p className="card-text">Complete surveillance for student safety.</p>
                </div>
                <div className="card-back">
                  <p className="back-text">CCTV in classrooms, corridors & school campus. Campus monitored with CCTV surveillance, ensuring a safe and disciplined
                    learning environment for all students.</p>
                </div>
              </div>
            </div>

            {/* CARD 6 — Play Area */}
            <div className="facility-card group">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-box bg-purple-100">
                    ⚽
                  </div>
                  <h3 className="card-title">Sports & Playground</h3>
                  <p className="card-text">Open playground promoting physical fitness.</p>
                </div>
                <div className="card-back">
                  <p className="back-text">Regular sports, yoga, cultural activities, and competitions promote fitness,
                    teamwork, and confidence.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Gallery Section */}
      <HomeGallerySection />

      {/* Upcoming Events */}
      <UpcomingEvents events={events} />

      {/* Contact Info */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />


      {/* Animations */}
      <style>
        {`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-kenburns {
          animation: kenburns 20s ease-in-out alternate infinite;
        }

        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlide {
          animation: fadeSlide 1.4s ease-out forwards;
        }

        .particle {
          position: absolute;
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          animation: floatUp 8s linear infinite;
        }
        .particle:nth-child(1) { left: 20%; animation-duration: 6s; }
        .particle:nth-child(2) { left: 50%; animation-duration: 9s; }
        .particle:nth-child(3) { left: 70%; animation-duration: 7s; }
        .particle:nth-child(4) { left: 85%; animation-duration: 10s; }

        @keyframes floatUp {
          0% { transform: translateY(50px); opacity: 0; }
          30% { opacity: 0.5; }
          100% { transform: translateY(-400px); opacity: 0; }
        }

        .glow-btn:hover {
          box-shadow: 0 0 15px rgba(255,180,0,0.8), 0 0 25px rgba(255,150,0,0.6);
          transform: scale(1.06);
        }

        .animate-bounceSlow {
          animation: bounce 2.5s infinite;
        }
        .facility-card {
      perspective: 1000px;
    }
    .card-inner {
      transition: transform 0.8s;
      transform-style: preserve-3d;
      position: relative;
      height: 260px;
    }
    .group:hover .card-inner {
      transform: rotateY(180deg);
    }
    .card-front, .card-back {
      position: absolute;
      backface-visibility: hidden;
      inset: 0;
      border-radius: 20px;
      padding: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      transition: all 0.3s ease;
    }
    .card-front {
      background: white;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    .card-back {
      background: linear-gradient(to bottom right, #4caf50, #2e7d32);
      color: white;
      transform: rotateY(180deg);
      padding: 30px;
      font-size: 1.1rem;
      line-height: 1.6;
    }
    .icon-box {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin: 0 auto 15px;
      font-size: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card-title {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .card-text {
      font-size: 1rem;
      color: #444;
    }
    .back-text {
      font-size: 1.1rem;
      font-weight: 500;
      padding: 10px;
    }
        `}
      </style>

    </div>
  );
};

export default Home;
