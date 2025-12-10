// ADMIN/src/pages/GalleryAdminPage.jsx
import { useEffect, useState, useMemo, useCallback } from "react";
import { getGalleryItems } from "../utils/galleryAPI";
import { motion, AnimatePresence } from "framer-motion";

const GalleryAdminPage = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerList, setViewerList] = useState([]);
  const [viewerIndex, setViewerIndex] = useState(0);

  const loadPage = async (pageNo = 1) => {
    setLoading(true);
    try {
      const res = await getGalleryItems(pageNo);
      const newItems = res.data.items || res.data || [];
      if (pageNo === 1) setItems(newItems);
      else setItems((prev) => [...prev, ...newItems]);
      setTotal(res.data.totalPages || 1);
      setPage(pageNo);
    } catch (err) {
      console.error("Error loading gallery:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPage(1);
  }, []);

  // Derived filtered lists
  const images = useMemo(() => items.filter((i) => i.type === "image"), [items]);
  const videos = useMemo(() => items.filter((i) => i.type === "video"), [items]);
  const eventItems = useMemo(() => items.filter((i) => i.event && i.event !== ""), [items]);

  // Open viewer modal
  const openViewer = (list, index) => {
    setViewerList(list);
    setViewerIndex(index);
    setViewerOpen(true);
  };

  // Viewer navigation
  const next = useCallback(() => {
    setViewerIndex((prev) => (prev + 1 >= viewerList.length ? 0 : prev + 1));
  }, [viewerList]);

  const prev = useCallback(() => {
    setViewerIndex((prev) => (prev - 1 < 0 ? viewerList.length - 1 : prev - 1));
  }, [viewerList]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!viewerOpen) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setViewerOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [viewerOpen, next, prev]);

  const currentItem = viewerOpen && viewerList.length > 0 ? viewerList[viewerIndex] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-yellow-100 py-10">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-800 drop-shadow-sm">
              Admin Gallery Overview
            </h1>
            <p className="text-gray-700 mt-1">
              All uploaded photos, videos, and event media in one place.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {["all", "image", "video", "event"].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-1 rounded-full font-semibold border transition ${filter === t
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-yellow-500 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:shadow-sm"
                  }`}
              >
                {t === "all"
                  ? "All"
                  : t === "image"
                    ? "Images"
                    : t === "video"
                      ? "Videos"
                      : "Events"}
              </button>
            ))}
          </div>
        </div>

        {/* Image Section */}
        {(filter === "all" || filter === "image") && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">🖼 Image Gallery</h2>
            {images.length === 0 ? (
              <p className="text-gray-500 text-sm">No images uploaded yet.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <motion.div
                    key={img._id}
                    className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
                    onClick={() => openViewer(images, idx)}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-contain bg-gray-50"
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {img.caption || "Untitled Image"}
                      </p>
                      <p className="text-[11px] text-gray-500">
                        {img.event || "General"}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Video Section */}
        {(filter === "all" || filter === "video") && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">🎥 Video Gallery</h2>
            {videos.length === 0 ? (
              <p className="text-gray-500 text-sm">No videos uploaded yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((vid, idx) => (
                  <motion.div
                    key={vid._id}
                    className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition relative"
                    onClick={() => openViewer(videos, idx)}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden bg-black">
                      <video
                        src={vid.url}
                        className="w-full h-full object-contain"
                        muted
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {vid.caption || "Untitled Video"}
                      </p>
                      <p className="text-[11px] text-gray-500">{vid.event || "General"}</p>
                    </div>
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full">
                      Video
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Event Section */}
        {(filter === "all" || filter === "event") && eventItems.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">🏅 Event-wise Media</h2>
            {Object.entries(
              eventItems.reduce((acc, item) => {
                const key = item.event || "General";
                if (!acc[key]) acc[key] = [];
                acc[key].push(item);
                return acc;
              }, {})
            ).map(([eventName, arr]) => (
              <div key={eventName}>
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">
                  {eventName} ({arr.length})
                </h3>
                <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-yellow-100 p-2 pb-4">
                  {arr.map((it, idx) => (
                    <motion.div
                      key={it._id}
                      className="min-w-[180px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl flex-shrink-0"
                      onClick={() => openViewer(arr, idx)}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden">
                        {it.type === "video" ? (
                          <video src={it.url} className="w-full h-full object-contain" muted />
                        ) : (
                          <img src={it.url} alt={it.caption} className="w-full h-full object-contain" />
                        )}
                      </div>
                      <div className="p-2">
                        <p className="text-xs font-semibold text-gray-800 truncate">{it.caption || "Untitled"}</p>
                        <p className="text-[10px] text-gray-500">{it.type}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Load more */}
        {page < totalPages && (
          <div className="flex justify-center mt-6">
            <button
              disabled={loading}
              onClick={() => loadPage(page + 1)}
              className="px-5 py-2 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 disabled:opacity-50 transition"
            >
              {loading ? "Loading..." : "Load more"}
            </button>
          </div>
        )}
      </div>

      {/* Viewer Modal */}
      {viewerOpen && currentItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div
            className="relative max-w-4xl w-full bg-white rounded-2xl p-4 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) next(); // swipe left
              if (info.offset.x > 50) prev();  // swipe right
            }}
          >
            {/* Close */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl z-50"
              onClick={() => setViewerOpen(false)}
            >
              ✕
            </button>

            {/* Type/Event Labels */}
            <div className="flex items-center gap-3 mb-3 z-50">
              <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                {currentItem.type.toUpperCase()}
              </span>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                {currentItem.event || "General"}
              </span>
            </div>

            {/* Media with Zoom */}
            <motion.div
              className="max-h-[70vh] flex items-center justify-center bg-black rounded-xl overflow-hidden cursor-zoom-in"
              whileHover={{ scale: 1.02 }}
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.05}
              whileTap={{ cursor: "grabbing" }}
            >
              {currentItem.type === "video" ? (
                <video
                  src={currentItem.url}
                  className="max-h-[70vh] w-full object-contain"
                  controls
                  autoPlay
                />
              ) : (
                <motion.img
                  src={currentItem.url}
                  alt={currentItem.caption}
                  className="max-h-[70vh] w-full object-contain"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              )}
            </motion.div>

            {/* Caption & Controls */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{currentItem.caption || "Untitled"}</h3>
                <p className="text-xs text-gray-500">{currentItem.event || "General Section"}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  ⬅ Prev
                </button>
                <button
                  onClick={next}
                  className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  Next ➡
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default GalleryAdminPage;
