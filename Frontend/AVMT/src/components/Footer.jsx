import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/saraswati_logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [faqOpen, setFaqOpen] = useState(null);

  const faq = [
    { q: "What are the school timings?", a: "School timings are 9:00 AM – 3:30 PM (Mon–Sat)." },
    { q: "How to apply for admission?", a: "Visit the Admission page or school office." },
    { q: "Is transport facility available?", a: "Yes, safe transport is available." },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-yellow-900 via-yellow-800 to-black 
      text-white pt-22 mt-20">

      {/* ---------- Marquee Animation ---------- */}
      <style>{`
        .marquee {
          animation: scroll 18s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(110%); }
          100% { transform: translateX(-110%); }
        }
      `}</style>

      {/* ---------- Decorative Wave ---------- */}
      <svg className="absolute top-0 w-full" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,149.3C672,149,768,171,864,181.3C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224V0H0Z"
        ></path>
      </svg>

      {/* ---------- Logo Floating Circle ---------- */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2">
        <div className="bg-white/20 backdrop-blur-xl border border-white/40 
          p-4 rounded-full shadow-2xl hover:scale-105 transition">
          <img src={logo} className="w-20 h-20 drop-shadow-xl" />
        </div>
      </div>

      {/* ---------- Marquee Notice ---------- */}
      <div className="bg-yellow-600 text-black py-2 mt-4 rounded-2xl w-200 font-semibold text-sm overflow-hidden whitespace-nowrap marquee">
        🚨 Admission Open 2025–26 | 🎉 Annual Function Soon | 🚌 Transport Available | 📢 New Computer Lab Inaugurated! 
        </div>

      {/* ---------- MAIN GRID CONTENT ---------- */}

      <div className="
        max-w-7xl mx-auto px-6 mt-20 
        grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-10">

        {/* ------------ Block 1: School Info ------------ */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold 
            bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-orange-300">
            Adarsh Vidya Mandir
          </h3>

          <p className="text-white-200 mt-3 
            text-xs sm:text-sm md:text-base leading-relaxed">
            Shaping disciplined, confident, creative young learners since 1997.
          </p>

          <div className="mt-6 space-y-2 text-yellow-300 
            text-xs sm:text-sm md:text-base">
            <p className="flex justify-center lg:justify-start gap-2"><FaMapMarkerAlt/> Tilokari, Jainagar, Koderma</p>
            <p className="flex justify-center lg:justify-start gap-2"><FaPhoneAlt/> +91 99XXXXXXXX</p>
            <p className="flex justify-center lg:justify-start gap-2"><FaEnvelope/> avmschool@gmail.com</p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="text-center lg:text-left">
          <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-yellow-200 text-xs sm:text-sm md:text-base">
            {["Home", "Admission", "Gallery", "Achievements", "Contact"].map((name, i) => (
              <li key={i}>
                <Link to={`/${name.toLowerCase()}`} className="hover:text-yellow-400">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------ Block 3: FAQ ------------ */}
        <div className="text-center lg:text-left">
          <h4 className="text-lg sm:text-xl font-bold mb-4">FAQ</h4>

          <div className="space-y-3">
            {faq.map((f,i)=>(
              <div key={i}
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className="
                  bg-white/10 hover:bg-white/20 backdrop-blur-lg 
                  border border-white/20 p-3 rounded-xl cursor-pointer 
                  text-xs sm:text-sm md:text-base transition">
                <p className="font-semibold">{f.q}</p>
                {faqOpen === i && (
                  <p className="text-yellow-200 mt-1">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ------------ Block 4: Newsletter ------------ */}
        <div className="text-center lg:text-left">
          <h4 className="text-lg sm:text-xl font-bold mb-4">Newsletter</h4>

          <div className="
            bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-xl 
            border border-white/20">
            
            <p className="text-yellow-200 text-xs sm:text-sm md:text-base">
              Stay updated with latest events & notices.
            </p>

            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)}
              className="
                w-full mt-3 px-3 py-2 rounded-xl 
                bg-white/20 text-white placeholder-gray-300 
                focus:ring-2 ring-yellow-400 outline-none
                text-xs sm:text-sm md:text-base"
            />

            <button className="
              mt-3 w-full bg-yellow-500 hover:bg-yellow-600 
              text-black font-bold py-2 rounded-xl transition 
              text-xs sm:text-sm md:text-base">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-5 
            text-xl sm:text-2xl md:text-3xl mt-5">
            <FaFacebookF className="hover:text-yellow-300 cursor-pointer"/>
            <FaInstagram className="hover:text-yellow-300 cursor-pointer"/>
            <FaYoutube className="hover:text-yellow-300 cursor-pointer"/>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 w-full h-px bg-white/20"></div>

      {/* Copyright */}
      <p className="text-center text-yellow-300 py-4 
        text-xs sm:text-sm md:text-base">
        © {new Date().getFullYear()} Adarsh Vidya Mandir. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
