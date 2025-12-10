import { useEffect, useState } from "react";
import {
  getGalleryItems,
  uploadGalleryItem,
  deleteGalleryItem,
} from "../utils/galleryAPI";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"; // for smooth animations

const AdminGalleryManager = () => {
  const [media, setMedia] = useState([]);
  const [preview, setPreview] = useState("");
  const [type, setType] = useState("image");
  const [caption, setCaption] = useState("");
  const [section, setSection] = useState("");
  const [event, setEvent] = useState("");
  const [data, setData] = useState([]);
  const [recent, setRecent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotal] = useState(1);
  const [deleteId, setDeleteId] = useState(null);
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await getGalleryItems(page);
      setData(res.data.items);
      setTotal(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecent = async () => {
    try {
      const res = await getGalleryItems(1);
      const list = (res.data.items || []).sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setRecent(list.slice(0, 8));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchRecent();
  }, [page]);

  const handleFileChange = (e) => {
    setMedia(Array.from(e.target.files));
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!media.length) return alert("Select at least one file");

    try {
      setUploading(true);
      const formData = new FormData();
      media.forEach((file) => formData.append("files", file));
      formData.append("type", type);
      formData.append("caption", caption);
      formData.append("event", section || "General");

      await uploadGalleryItem(formData);

      setMedia([]);
      setPreview("");
      setCaption("");
      setEvent("");

      fetchRecent();
      fetchData();
    } catch {
      alert("Upload Failed");
    } finally {
      setUploading(false);
    }
  };

  const confirmDelete = async () => {
    await deleteGalleryItem(deleteId);
    setDeleteId(null);
    fetchRecent();
    fetchData();
  };

  const goToFullGallery = () => navigate("/admin/gallery");

  // Drag Scroller
  const useDragScroll = () => {
    const ref = useState(null)[0];

    useEffect(() => {
      const slider = ref;
      if (!slider) return;

      let isDown = false;
      let startX;
      let scrollLeft;

      const onMouseDown = (e) => {
        isDown = true;
        slider.classList.add("cursor-grabbing");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      };
      const onMouseLeave = () => { isDown = false; slider.classList.remove("cursor-grabbing"); };
      const onMouseUp = () => { isDown = false; slider.classList.remove("cursor-grabbing"); };
      const onMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast multiplier
        slider.scrollLeft = scrollLeft - walk;
      };

      slider.addEventListener("mousedown", onMouseDown);
      slider.addEventListener("mouseleave", onMouseLeave);
      slider.addEventListener("mouseup", onMouseUp);
      slider.addEventListener("mousemove", onMouseMove);

      // Touch events for mobile
      let touchStartX = 0;
      let touchScrollLeft = 0;

      const onTouchStart = (e) => {
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = slider.scrollLeft;
      };
      const onTouchMove = (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - touchStartX) * 2;
        slider.scrollLeft = touchScrollLeft - walk;
      };

      slider.addEventListener("touchstart", onTouchStart);
      slider.addEventListener("touchmove", onTouchMove);

      return () => {
        slider.removeEventListener("mousedown", onMouseDown);
        slider.removeEventListener("mouseleave", onMouseLeave);
        slider.removeEventListener("mouseup", onMouseUp);
        slider.removeEventListener("mousemove", onMouseMove);

        slider.removeEventListener("touchstart", onTouchStart);
        slider.removeEventListener("touchmove", onTouchMove);
      };
    }, [ref]);

    return ref;
  };


  return (
    <div className="p-6 space-y-12 max-w-7xl mx-auto">

      {/* Upload Card */}
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-6 border border-yellow-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-extrabold text-yellow-700 mb-5 drop-shadow">
          📸 Upload to School Gallery
        </h1>

        <form onSubmit={handleUpload} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="font-semibold text-gray-700 mb-1 block">Media Type</label>
              <select
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="event">Event Banner</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-gray-700 mb-1 block">Section / Category</label>
              <select
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Event">Event</option>
                <option value="Fest">Fest</option>
                <option value="Puja">Puja</option>
                <option value="Annual Function">Annual Function</option>
                <option value="Sports Day">Sports Day</option>
                <option value="General">General</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-semibold text-gray-700 mb-1 block">Caption</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Short description"
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 mb-1 block">Select Files</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              accept="image/*,video/*"
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
            />
            {preview && (
              <img
                src={preview}
                className="w-32 h-32 object-cover rounded-xl mt-3 shadow-lg border-2 border-yellow-300"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-red-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </motion.div>

      {/* Recent Uploads */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold text-yellow-700 drop-shadow">⏱ Recent Uploads</h2>
          <button onClick={goToFullGallery} className="text-blue-600 hover:underline">
            View All →
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-yellow-100 p-2" ref={useDragScroll()}>
          {recent.map((it) => (
            <motion.div
              key={it._id}
              className="min-w-[180px] bg-white border rounded-2xl shadow-lg flex-shrink-0 overflow-hidden hover:scale-105 transition transform cursor-pointer"
              whileHover={{ scale: 1.07 }}
            >
              <div className="h-32 w-full bg-gray-100">
                {it.type === "video" ? (
                  <video src={it.url} className="h-full w-full object-contain" muted />
                ) : (
                  <img src={it.url} className="h-full w-full object-contain" />
                )}
              </div>
              <div className="p-2 text-sm">
                <p className="font-semibold truncate">{it.caption || "No title"}</p>
                <p className="text-xs text-gray-500">{it.event || "General"}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Items */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-700 mb-4 drop-shadow">Gallery Items</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-yellow-100 p-2 pb-4" ref={useDragScroll()}>
          {data.map((item) => (
            <motion.div
              key={item._id}
              className="min-w-[180px] bg-white border rounded-2xl shadow-lg flex-shrink-0 overflow-hidden hover:scale-105 transition transform relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-40 w-full bg-gray-100">
                {item.type === "video" ? (
                  <video src={item.url} className="h-full w-full object-cover" controls />
                ) : (
                  <img src={item.url} className="h-full w-full object-contain rounded-t-2xl" />
                )}
              </div>
              <div className="p-2">
                <p className="text-sm font-semibold truncate">{item.caption || "No title"}</p>
                <p className="text-xs text-gray-500">{item.event || "General"}</p>
                <button
                  onClick={() => setDeleteId(item._id)}
                  className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full hover:bg-red-700 shadow"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <p className="font-bold text-lg mb-3">Delete this item?</p>
            <div className="flex gap-4 justify-end">
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminGalleryManager;
