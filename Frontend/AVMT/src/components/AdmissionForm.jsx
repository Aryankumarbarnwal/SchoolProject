import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createAdmission } from "../utils/admissionAPI";

const steps = [
  "Student Details",
  "Parent Details",
  "Documents Upload",
  "Review & Submit",
];

const CLASSES = [
  "Nursery", "LKG", "UKG", "1st", "2nd", "3rd", "4th", "5th",
  "6th", "7th", "8th", "9th", "10th", "11th", "12th"
];

const AdmissionForm = ({ onSuccess }) => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0); // left/right animation control
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    studentName: "",
    classApplied: "",
    dob: "",
    gender: "",
    address: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    documentTC: null,
    document11thProof: null,
  });

  const updateValue = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const updateFile = (e) =>
    setForm({ ...form, [e.target.name]: e.target.files[0] });

  const requiresTC = form.classApplied === "9th";
  const needs11thProof = form.classApplied === "12th";
  const blocks10th = form.classApplied === "10th";

  const nextStep = () => {
    if (step === 0 && (!form.studentName || !form.classApplied)) {
      alert("Student Name & Class are required.");
      return;
    }
    if (step === 1 && !form.parentPhone) {
      alert("Parent Phone Number required.");
      return;
    }
    if (blocks10th) {
      alert("Direct admission to 10th class is not allowed.");
      return;
    }
    setDirection(1);
    setStep(step + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const fd = new FormData();
      Object.keys(form).forEach((key) => {
        if (form[key]) fd.append(key, form[key]);
      });
      await createAdmission(fd);
      onSuccess?.(form.studentName);
      // reset form after success
      setForm({
        studentName: "",
        classApplied: "",
        dob: "",
        gender: "",
        address: "",
        parentName: "",
        parentPhone: "",
        parentEmail: "",
        documentTC: null,
        document11thProof: null,
      });

      // reset wizard back to first step
      setStep(0);
    } catch (e) {
      alert("Error submitting form");
    } finally {
      setSubmitting(false);
    }
  };

  // ---------- STEP COMPONENTS ----------
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <input name="studentName" placeholder="Student Name *" value={form.studentName} onChange={updateValue} className="inputBox" />

            <select name="classApplied" value={form.classApplied} onChange={updateValue} className="inputBox">
              <option value="">Select Class *</option>
              {CLASSES.map((c) => (
                <option key={c} value={c} disabled={c === "10th"}>
                  {c}
                </option>
              ))}
            </select>

            {requiresTC && (
              <p className="text-yellow-700 text-sm">
                ⚠ 8th Pass Certificate / TC required.
              </p>
            )}
            {needs11thProof && (
              <p className="text-yellow-700 text-sm">
                ⚠ 11th Proof Required.
              </p>
            )}

            <div>
              <label className="font-medium text-gray-700 block mb-1">
                Date of Birth (DOB) <span className="text-red-500">*</span>
              </label>

              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={updateValue}
                className="inputBox"
                required
              />

              <p className="text-xs text-gray-500 mt-1">
                Please select the student's Date of Birth.
              </p>
            </div>


            <select name="gender" value={form.gender} onChange={updateValue} className="inputBox">
              <option value="">Gender</option>
              <option>Boy</option>
              <option>Girl</option>
            </select>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <input name="parentName" placeholder="Parent Name" value={form.parentName} onChange={updateValue} className="inputBox" />
            <input name="parentPhone" placeholder="Parent Phone *" value={form.parentPhone} onChange={updateValue} className="inputBox" />
            <input name="parentEmail" placeholder="Parent Email" value={form.parentEmail} onChange={updateValue} className="inputBox" />
            <textarea name="address" placeholder="Address" value={form.address} onChange={updateValue} className="inputBox h-20" />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            {requiresTC && (
              <div>
                <label className="font-semibold">Upload 8th Pass / TC *</label>
                <input type="file" name="documentTC" onChange={updateFile} required className="inputBox" />
              </div>
            )}

            {needs11thProof && (
              <div>
                <label className="font-semibold">Upload 11th Proof *</label>
                <input type="file" name="document11thProof" onChange={updateFile} required className="inputBox" />
              </div>
            )}

            {!requiresTC && !needs11thProof && (
              <p className="text-gray-600 text-sm">
                ✔ No special documents required for this class.
              </p>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-2 text-sm text-gray-700">
            {Object.entries(form).map(([k, v]) => (
              <p key={k}>
                <strong>{k}:</strong> {v?.name || v || "—"}
              </p>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="wizardCard">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        {steps[step]}
      </h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded mb-5">
        <div
          className="h-2 bg-yellow-500 rounded transition-all"
          style={{ width: `${((step + 1) / steps.length) * 100}%` }}
        ></div>
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: (dir) => ({
              opacity: 0,
              x: dir > 0 ? 80 : -80,
            }),
            animate: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.35 },
            },
            exit: (dir) => ({
              opacity: 0,
              x: dir > 0 ? -80 : 80,
              transition: { duration: 0.35 },
            }),
          }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        {step > 0 ? (
          <button className="btnSecondary" onClick={prevStep}>⬅ Back</button>
        ) : (
          <span></span>
        )}

        {step < steps.length - 1 ? (
          <button className="btnPrimary" onClick={nextStep}>Next ➜</button>
        ) : (
          <button className="btnPrimary" disabled={submitting} onClick={handleSubmit}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .wizardCard {
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(12px);
          padding: 28px;
          border-radius: 22px;
          border: 1px solid #ffe08a;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }
        .inputBox {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #ccc;
          border-radius: 10px;
        }
        .inputBox:focus {
          border-color: #ffcc00;
          box-shadow: 0 0 0 3px rgba(255,205,0,0.2);
        }
        .btnPrimary {
          background: #ffcc00;
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 600;
        }
        .btnPrimary:hover { background: #ffb800; }
        .btnSecondary {
          background: white;
          border: 1px solid #ccc;
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default AdmissionForm;
