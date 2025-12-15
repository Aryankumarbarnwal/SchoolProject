import { useState } from "react";
import AdmissionForm from "../components/AdmissionForm";

const Admission = () => {
  const [submitted, setSubmitted] = useState(false);
  const [studentName, setStudentName] = useState("");

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-4 py-20 flex justify-center items-start">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-20 items-start">
        {/* Left Side - Info / Hero */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold">
            Admission Open • Session 2025-2026
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Join <span className="text-yellow-600">Adarsh Vidya Mandir</span><br />
            Where Discipline Meets Excellence.
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Fill the admission form carefully with correct details. Our school
            team will verify the application and contact you for the next steps.
          </p>

          <div className="grid grid-cols-3 gap-4 text-sm md:text-base">
            <div className="bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-sm border">
              <p className="text-gray-500">Classes</p>
              <p className="font-bold text-gray-800">Nursery - 10th</p>
            </div>
            <div className="bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-sm border">
              <p className="text-gray-500">Medium</p>
              <p className="font-bold text-gray-800">English / Hindi</p>
            </div>
            <div className="bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-sm border">
              <p className="text-gray-500">Location</p>
              <p className="font-bold text-gray-800">Tilokari, Jainagar</p>
            </div>
          </div>

          
        </div>

        {/* Right Side - Form */}
        <div>
          {submitted && (
            <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm">
              ✅ Thank you <span className="font-semibold">{studentName}</span>, your admission form
              has been submitted successfully. Our team will contact you soon.
            </div>
          )}
          <AdmissionForm
          onSuccess={(name) => {
            setStudentName(name);
            setSubmitted(true);
          }}
        />
        </div>
      </div>
    </div>
  );
};

export default Admission;
