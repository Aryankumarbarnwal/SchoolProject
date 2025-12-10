import { useState } from "react";
import { createNotice } from "../utils/noticeAPI";
import { useNavigate } from "react-router-dom";

const AddNotice = () => {
  const navigate = useNavigate();

  const [textNotice, setTextNotice] = useState({
  title: "",
  description: "",
  category: "General",
  audience: "Public",
  visibleOnHomepage: true,
});

const [imageNotice, setImageNotice] = useState({
  title: "",
  image: "",
  category: "General",
  audience: "Public",
  visibleOnHomepage: true,
});


  const [preview, setPreview] = useState("");
  const [mode, setMode] = useState("text"); // text OR image

  // ---------------------
  // Generic input handler
  // ---------------------
  const handleChange = (e) => {
  if (mode === "text") {
    setTextNotice({ ...textNotice, [e.target.name]: e.target.value });
  } else {
    setImageNotice({ ...imageNotice, [e.target.name]: e.target.value });
  }
};


  // ---------------------
  // Image upload handler
  // ---------------------
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageNotice({ ...imageNotice, image: reader.result });
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // ---------------------
  // Submit handler
  // ---------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare final data
    const finalData = 
      mode === "text"
      ? {...textNotice, type: "text"}
      :{...imageNotice, type: "image"}
    ;

    try {
      await createNotice(finalData);
      alert("Notice Added Successfully!");
      navigate("/admin/manage-notices");
    } catch (err) {
      console.error("NOTICE CREATE ERROR:", err);
      alert("Failed to add notice! Check console for details.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg border">

      <h1 className="text-3xl font-bold mb-6 text-yellow-700">
        Add New Notice
      </h1>

      {/* Select Mode */}
      <div className="flex gap-4 mb-4">
        <button
          type="button"
          className={`px-4 py-2 rounded-lg border ${mode === "text" ? "bg-yellow-600 text-white" : "bg-gray-100"}`}
          onClick={() => setMode("text")}
        >
          ✍️ Text Notice
        </button>

        <button
          type="button"
          className={`px-4 py-2 rounded-lg border ${mode === "image" ? "bg-yellow-600 text-white" : "bg-gray-100"}`}
          onClick={() => setMode("image")}
        >
          🖼 Image Notice
        </button>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* Title */}
        <div>
          <label className="font-semibold">Notice Title</label>
          <input
            type="text"
            name="title"
            value={mode === "text" ? textNotice.title : imageNotice.title}
            onChange={handleChange}
            className="w-full p-3 border rounded mt-1"
            placeholder="Holiday Announcement, Exam Notice..."
            required
          />
        </div>

        {/* Description for text notice */}
        {mode === "text" && (
          <div>
            <label className="font-semibold">Description</label>
            <textarea
              name="description"
              value={textNotice.description}
              onChange={handleChange}
              className="w-full p-3 border rounded mt-1 h-28"
              placeholder="Write full notice content here..."
              required
            ></textarea>
          </div>
        )}

        {/* Image for image notice */}
        {mode === "image" && (
          <div>
            <label className="font-semibold">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded"
              onChange={handleImageUpload}
              required
            />

            <p className="text-gray-500 text-center mt-2">OR Paste Image URL</p>

            <input
              type="text"
              name="image"
              value={imageNotice.image}
              placeholder="Paste Image URL"
              onChange={(e) => {
                handleChange(e);
                setPreview(e.target.value);
              }}
              className="w-full p-2 border rounded"
            />

            {preview && (
              <img
                src={preview}
                className="mt-3 w-40 h-40 border rounded object-cover mx-auto"
                alt="Preview"
              />
            )}
          </div>
        )}

        {/* Category */}
        <div>
          <label className="font-semibold">Category</label>
          <select
            name="category"
            value={mode === "text" ? textNotice.category : imageNotice.category}
            onChange={handleChange}
            className="w-full p-3 border rounded mt-1"
          >
            <option>General</option>
            <option>Holiday</option>
            <option>Exam</option>
            <option>Event</option>
            <option>Important</option>
          </select>
        </div>

        {/* Audience */}
        <div>
          <label className="font-semibold">Audience</label>
          <select
            name="audience"
            value={mode === "text" ? textNotice.audience : imageNotice.audience}
            onChange={handleChange}
            className="w-full p-3 border rounded mt-1"
          >
            <option>Public</option>
            <option>Students</option>
            <option>Teachers</option>
            <option>All</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-semibold"
        >
          Add Notice
        </button>
      </form>
    </div>
  );
};

export default AddNotice;
