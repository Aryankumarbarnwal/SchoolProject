import { useState, useEffect, useRef } from "react";


const YEAR_LIST = Array.from({ length: 10 }, (_, i) => {
  const year = 2020 + i;
  return `${year}-${year + 1}`;
});

const AddAchievementForm = ({ initialData = null, onSubmit, btnText }) => {
  // --- Lazy Initial State (Best Practice) ---

  const [form, setForm] = useState(() => ({
    session: initialData?.session || "",
    category: initialData?.category || "",
    students: initialData?.students || [
      { name: "", className: "", percentage: "", marks: "", badge: "", photo: "" },
    ],
  }));

  const didMount = useRef(false);

  // --- Update form only when editing (when initialData arrives) ---
  useEffect(() => {
    if (initialData) return;

    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    setForm({
      session: initialData.session || "",
      category: initialData.category || "",
      students: initialData.students || [
        { name: "", className: "", percentage: "", marks: "", badge: "", photo: "" },
      ],
    });
  }, [initialData]);

  // --- Handle Form Change ---
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // --- Student Fields Change ---
  const handleStudentChange = (index, field, value) => {
    const updated = [...form.students];
    updated[index][field] = value;

    // Auto-generate badge suggestion based on percentage
    if (field === "percentage") {
      const percent = Number(value);
      if (percent >= 95) updated[index].badge = "State Topper";
      else if (percent >= 90) updated[index].badge = "School Topper";
      else if (percent >= 85) updated[index].badge = "District Rank";
      else updated[index].badge = "";
    }
    setForm({ ...form, students: updated });
  };

  // --- Handle Image Upload ---
  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;

      const updated = [...form.students];
      updated[index].photo = base64Image; // Store as Base64
      setForm({ ...form, students: updated });
    };
    reader.readAsDataURL(file);
  };



  // --- Add New Student ---
  const addStudent = () => {
    setForm({
      ...form,
      students: [
        ...form.students,
        { name: "", className: "", percentage: "", marks: "", badge: "", photo: "" },
      ],
    });
  };

  // --- Remove Student ---
  const removeStudent = (index) => {
    if (form.students.length === 1) return;
    // const updated = form.students.filter((_, i) => i !== index);
    setForm({ ...form, students: form.students.filter((_, i) => i !== index), });
  };

  // --- Submit Final Form ---
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white shadow-xl p-7 rounded-xl space-y-8 border"
    >
      {/* Title */}
      <h1 className="text-3xl font-bold text-yellow-700">
        {btnText || "Save Achievement"}
      </h1>

      {/* SESSION */}
      <div>
        <label className="font-semibold">Session</label>
        <select
          name="session"
          value={form.session}
          onChange={handleChange}
          className="w-full border p-3 rounded mt-1 focus:ring-yellow-400"
          required
        >
          <option value="">Select Session</option>
          {YEAR_LIST.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* CATEGORY */}
      <div>
        <label className="font-semibold">Achievement Category</label>
        <input
          type="text"
          name="category"
          placeholder="10th Board Result / Science Fair / Sports"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-3 rounded mt-1 focus:ring-yellow-400"
          required
        />
      </div>

      {/* STUDENTS SECTION */}
      <div className="space-y-5">
        <h2 className="text-xl font-semibold text-gray-700">
          Student Achievements
        </h2>

        {form.students.map((stu, index) => (
          <div
            key={index}
            className="border bg-yellow-50 rounded-xl p-5 shadow-sm space-y-4 relative"
          >
            {/* Remove button */}
            {form.students.length > 1 && (
              <button
                type="button"
                onClick={() => removeStudent(index)}
                className="absolute top-3 right-3 text-red-600 hover:text-red-800 font-bold"
              >
                ✕
              </button>
            )}

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Student Name"
                value={stu.name}
                onChange={(e) =>
                  handleStudentChange(index, "name", e.target.value)
                }
                className="border p-3 rounded"
                required
              />

              <input
                type="text"
                placeholder="Class (e.g., 10th A)"
                value={stu.className}
                onChange={(e) =>
                  handleStudentChange(index, "className", e.target.value)
                }
                className="border p-3 rounded"
                required
              />

              <input
                type="number"
                placeholder="Percentage"
                value={stu.percentage}
                onChange={(e) =>
                  handleStudentChange(index, "percentage", e.target.value)
                }
                className="border p-3 rounded"
                required
              />

              {/* Marks */}
              <input
                type="number"
                placeholder="Marks (e.g., 450)"
                value={stu.marks}
                onChange={(e) =>
                  handleStudentChange(index, "marks", e.target.value)
                }
                className="border p-2 rounded"
                required
              />

              {/* BADGE */}
              <input
                type="text"
                placeholder="Badge (Auto Recommended)"
                value={stu.badge}
                onChange={(e) =>
                  handleStudentChange(index, "badge", e.target.value)
                }
                className="border p-3 rounded"
              />

              {/* Photo Upload OR URL */}
              <div className="col-span-2 space-y-2">
                <label className="font-semibold">Student Photo</label>

                {/* Upload Button */}
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, index)}
                    className="border p-2 rounded w-full"
                  />
                </div>

                <p className="text-center text-gray-500">OR</p>

                {/* URL Input */}
                <input
                  type="text"
                  placeholder="Paste image URL"
                  value={stu.photo}
                  onChange={(e) =>
                    handleStudentChange(index, "photo", e.target.value)
                  }
                  className="border p-2 rounded w-full"
                />

                {/* Preview */}
                {stu.photo && (
                  <img
                    src={stu.photo}
                    className="mt-2 w-24 h-24 object-cover rounded-full border"
                    alt="preview"
                  />
                )}
              </div>

            </div>
          </div>
        ))}

        {/* Add new student button */}
        <button
          type="button"
          onClick={addStudent}
          className="px-5 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
        >
          ➕ Add Another Student
        </button>
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="w-full py-3 bg-yellow-700 text-white rounded-lg font-bold text-lg hover:bg-yellow-800 transition"
      >
        {btnText || "Save Achievement"}
      </button>
    </form>
  );
};

export default AddAchievementForm;
