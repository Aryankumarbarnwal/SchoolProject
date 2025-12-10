import { useState, useEffect } from "react";

const testimonialsData = [
  {
    name: "Mrs. Kavita Sharma",
    role: "Parent",
    relation: "Mother of Class 9th student",
    message:
      "Adarsh Vidya Mandir has completely changed my son's attitude towards studies. Discipline + caring teachers = perfect school.",
  },
  {
    name: "Rohit Kumar",
    role: "Student",
    relation: "Class 10th (2024 Batch)",
    message:
      "Yaha ke teachers sirf padhate nahi, samjhate hain. Extra doubt classes aur personal guidance ne mujhe 90% lane me help kiya.",
  },
  {
    name: "Anjali Verma",
    role: "Alumni",
    relation: "B.Tech, Software Engineer at MNC",
    message:
      "Maine apni schooling yaha se ki, aur aaj jo bhi hoon, uski foundation AVM ne banayi. Values + confidence dono yahi se mile.",
  },
  {
    name: "Mr. Sanjay Kumar",
    role: "Parent",
    relation: "Father of Class 5th student",
    message:
      "Village area me itni acchi English + moral education dekh kar bahut khushi hoti hai. Bachcha har din khushi se school jata hai.",
  },
];

const roleColors = {
  Parent: "bg-blue-100 text-blue-700",
  Student: "bg-green-100 text-green-700",
  Alumni: "bg-purple-100 text-purple-700",
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const goPrev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const t = testimonialsData[current];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-r from-yellow-50 via-white to-blue-100">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-800 mb-2">
            Testimonials
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Parents, Students & Alumni sharing their journey with{" "}
            <span className="font-semibold text-yellow-700">
              Adarsh Vidya Mandir
            </span>
          </p>
        </div>

        {/* Card + Carousel */}
        <div className="relative bg-white/80 backdrop-blur-md shadow2xl rounded-2xl p-6 md:p-8 border border-yellow-300">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center text-3xl shadow-lg">
            “
          </div>

          {/* Content */}
          <div className="mt-4 md:mt-2">
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6">
              {t.message}
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="font-bold text-gray-900 text-lg">
                  {t.name}
                </p>
                <p className="text-sm text-gray-600">{t.relation}</p>
              </div>

              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  roleColors[t.role] || "bg-gray-100 text-gray-700"
                }`}
              >
                {t.role}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Left/Right Buttons */}
            <div className="flex gap-3">
              <button
                onClick={goPrev}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-yellow-100 transition"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button
                onClick={goNext}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-yellow-100 transition"
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    idx === current
                      ? "bg-yellow-600 w-5"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
