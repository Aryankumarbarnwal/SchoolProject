import React, { useEffect, useState } from "react";
import image from "../assets/SchoolImage2.png";
import image2 from "../assets/school image.png";
import eventImage1 from "../assets/EventsImage1.png"
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
  const events = [];

  return (
    <div className="relative top-0.5 w-full rounded-xl bg-gradient-to-br from-[#e0f2f1] via-white to-[#f1f8e9] overflow-hidden">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden shadow-2xl">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-top animate-kenburns hero-bg"
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 px-4 sm:px-8 md:px-10 text-center text-white max-w-3xl md:max-w-4xl animate-fadeSlide">

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-5 leading-tight">
            Adarsh Vidya Mandir, Tilokari – Jainagar, Koderma (Jharkhand)
          </h1>

          {/* Dynamic Motto */}
          <p
            className={`text-base sm:text-lg md:text-2xl font-semibold text-yellow-300 mb-4 sm:mb-6 transition-all duration-700 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            “{mottos[index]}”
          </p>

          {/* Sub Text */}
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed text-gray-200 mx-auto max-w-xl">
            Established in 1998 under the leadership of
            <strong> Shri Neelkanth Kumar</strong>, our school continues its journey of excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4">

            {/* Admission Button */}
            <a
              href="/admission"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-400 to-orange-500 
        text-white text-base sm:text-lg font-semibold rounded-full shadow-lg glow-btn text-center"
            >
              Apply for Admission
            </a>

            {/* Prospectus Button */}
            <a
              href="/Prospectus.docx"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-yellow-400 text-yellow-300 
        text-base sm:text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-500 
        hover:text-black transition-all duration-300 text-center"
            >
              Download Prospectus
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 animate-bounceSlow text-white text-2xl sm:text-3xl">
          ↓
        </div>
      </section>


      {/* Divider */}
      {/* <div className="w-full overflow-hidden -mt-2">
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#f1f8e9" d="M0,64L1440,192L1440,0L0,0Z"></path>
        </svg>
      </div> */}

      {/* School Stats */}
      <SchoolStats />

      {/* Alumni */}
      <section className="px-4 sm:px-6 py-10">
        <div className="p-4 sm:p-6 bg-[#ededf3] bg-opacity-40 backdrop-blur-lg rounded-3xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            Alumni Portal
          </h2>
          {/* Desktop Version (unchanged) */}
          <div className="hidden md:block">
            <AlumniIndex />
          </div>

          {/* Mobile Version – Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto flex gap-4 pb-4">
            {[1, 2, 3, 4, 5].map((a) => (
              <div
                key={a}
                className="min-w-[180px] bg-white rounded-2xl p-4 shadow-lg border border-gray-200"
              >
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto">
                  A
                </div>

                <h3 className="text-base font-semibold text-center mt-2">Alumni Name</h3>
                <p className="text-xs text-center text-gray-500">Position @ Company</p>
                <p className="text-xs text-center text-gray-400 mt-1">Batch 2021</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl p-6 sm:p-10 bg-white/60 backdrop-blur-md shadow-2xl border border-white/40">

          <AcademicAchievements />

          <div className="flex justify-center mt-8">
            <a
              href="/achievements"
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 
              text-white font-semibold rounded-xl shadow-md hover:scale-[1.03] transition duration-300"
            >
              View All Achievements →
            </a>
          </div>
        </div>

      </section>

      {/* 🟩 About Preview  */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="relative max-w-6xl mx-auto">

          {/* Decorative Gradient Border (desktop only) */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-green-600 to-blue-700 
      rounded-3xl blur-xl opacity-20 hidden md:block">
          </div>

          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 border border-white/40">

            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold 
        text-center bg-clip-text text-transparent p-1
        bg-gradient-to-r from-green-700 to-blue-700 tracking-wide mb-8">
              About Adarsh Vidya Mandir
            </h2>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* LEFT SIDE — Text */}
              <div className="text-gray-800 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  Established in <strong>1998</strong>, Adarsh Vidya Mandir has been a guiding
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
                  className="inline-block mt-2 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg 
            font-semibold text-white rounded-full
            bg-gradient-to-r from-green-500 to-blue-600 hover:scale-[1.05] shadow-lg 
            hover:shadow-xl transition-all duration-300"
                >
                  Read Full Story →
                </a>
              </div>

              {/* RIGHT SIDE — Avatar */}
              <div className="flex flex-col items-center">

                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44">
                  {/* Outer Glow (desktop only) */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-green-500 
              rounded-full blur-xl opacity-30 hidden md:block"></div> */}

                  {/* Avatar */}
                  {/* <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-green-200 
              flex items-center justify-center shadow-xl border-4 border-white 
              text-white text-5xl sm:text-6xl font-bold select-none
              transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    {(() => {
                      const name = "Mr. Neelkanth Kumar";
                      const ignore = ["mr", "mr.", "mrs", "ms", "miss", "dr", "dr.", "sir", "er"];
                      let parts = name.toLowerCase().split(" ");
                      if (ignore.includes(parts[0])) parts.shift();
                      return parts[0]?.charAt(0).toUpperCase() || "N";
                    })()}
                  </div>
                   */}
                  <div className="w-35 h-35 mx-auto rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center 
                  shadow-xl text-white text-6xl font-bold select-none">
                    {(() => {
                      const name = "Neelkanth Kumar";  // Founder name
                      const initials = name.split(" ").map(n => n[0]).join("").toUpperCase();
                      return initials;
                    })()}
                  </div>

                </div>

                <div className="text-center mt-4">
                  <p className="text-lg font-bold text-gray-800">Mr. Neelkanth Kumar</p>
                  <p className="text-sm text-gray-500">Founder & Principal</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Facilities */}
      <section className="mt-10 sm:mt-20 px-4 sm:px-6">

        <div className="p-6 sm:p-12 rounded-3xl shadow-xl bg-gradient-to-br from-[#e8e2e2] via-[#e7e8ec] to-[#ebedec]">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-green-600">
            Our School Facilities
          </h2>

          <div className="facility-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            {/* CARD 1 — Smart Classes */}
            <div className="facility-card group">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-box bg-yellow-100"> 📚 </div>
                  <h3 className="card-title">Smart Classes</h3>
                  <p className="card-text">Modern digital classrooms with projector & interactive learning.</p>
                </div>
                <div className="card-back">
                  <p className="back-text">
                    AVM provides modern infrastructure, advanced learning tools, and a safe environment for holistic growth of every child.
                  </p>
                </div>
              </div>
            </div>
            {/* CARD 2 — Library */}
            <div className="facility-card group">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-box bg-green-100"> 📖
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
                  <div className="icon-box bg-blue-100"> 💻
                  </div>
                  <h3 className="card-title">Computer Lab</h3>
                  <p className="card-text">Fully equipped lab for practical computer learning.</p>
                </div>
                <div className="card-back">
                  <p className="back-text">Fully equipped computer lab where students learn modern digital skills essential for the future.</p>
                </div>
              </div>
            </div>
            {/* CARD 4 — Transport */}
            <div className="facility-card group">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-box bg-orange-100"> 🚌
                  </div>
                  <h3 className="card-title">Transport</h3>
                  <p className="card-text">Safe and reliable bus service across nearby areas.</p>
                </div>
                <div className="card-back">
                  <p className="back-text">GPS-enabled routes & trained drivers for safety. Safe and reliable transport covering nearby towns and villages with trained drivers and attendants.</p>
                </div>
              </div>
            </div>
            {/* CARD 5 — Safety / CCTV */}
            <div className="facility-card group">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-box bg-red-100"> 🎥
                  </div>
                  <h3 className="card-title">24×7 CCTV Security</h3>
                  <p className="card-text">Complete surveillance for student safety.</p>
                </div>
                <div className="card-back">
                  <p className="back-text">CCTV in classrooms, corridors & school campus. Campus monitored with CCTV surveillance, ensuring a safe and disciplined learning environment for all students.</p>
                </div>
              </div>
            </div>
            {/* CARD 6 — Play Area */}
            <div className="facility-card group">
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-box bg-purple-100"> ⚽
                  </div>
                  <h3 className="card-title">Sports & Playground</h3>
                  <p className="card-text">Open playground promoting physical fitness.</p>
                </div>
                <div className="card-back">
                  <p className="back-text">Regular sports, yoga, cultural activities, and competitions promote fitness, teamwork, and confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Gallery */}
      <HomeGallerySection />

      {/* Events */}
      <UpcomingEvents events={events} emptyImage={eventImage1} />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Animations */}
      <style>
        {`
        .hero-bg {
          background-image: url(${image2}); /* MOBILE IMAGE */
        }

        @media (min-width: 640px) {
          .hero-bg {
            background-image: url(${image}); /* DESKTOP IMAGE */
          }
        }
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
    
    /* MOBILE ONLY FIXES */
  @media (max-width: 640px) {
  /* Make grid 2 columns on small screens */
  .facility-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 14px !important;
  }

  /* Card adjustments */
  .facility-card {
    padding: px !important;
    border-radius: 16px !important;
  }

  /* Remove flip animation on mobile */
  .card-inner,
  .card-front,
  .card-back {
    transform: none !important;
    position: relative !important;
    height: auto !important;
    backface-visibility: visible !important;
  }
  .card-back {
    display: none !important; /* No flip on mobile */
  }

  /* Smaller icons */
  .icon-box {
    width: 46px !important;
    height: 46px !important;
    font-size: 20px !important;
    margin-bottom: 10px !important;
  }

  /* Text readability */
  .card-title {
    font-size: 1rem !important;
    margin-bottom: 2px !important;
  }

  .card-text {
    font-size: 0.8rem !important;
    line-height: 1.3 !important;
  }
}
        `}
      </style>
    </div>
  );
};

export default Home;




