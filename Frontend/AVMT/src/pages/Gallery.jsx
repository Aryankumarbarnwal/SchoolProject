import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getGalleryItems } from "../utils/galleryAPI";

const AppleGalleryPro = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [preview, setPreview] = useState(null);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getGalleryItems();
      const data = res.data.items;

      // Add optimized versions if needed
      const optimized = data.map((item) => ({
        ...item,
        tiny: item.url + "?w=250&auto=compress&fit=crop",  // preview thumbnail
        blur: item.url + "?w=20&blur=50", // blur placeholder
        hd: item.url + "?w=1400&auto=compress" // HD version for modal
      }));

      setItems(optimized);
      // setItems(res.data.items);
    })();
  }, []);

  /** Auto-filter list when filter changes */
  useEffect(() => {
    if (filter === "all") setFilteredList(items);
    else setFilteredList(items.filter((i) => i.type === filter));
  }, [filter, items]);

  /** Open modal & set filtered list of same type */
  const openPreview = (item) => {
    setFilter(item.type); // Auto filter to same type
    setPreview(item);
  };

  /** Navigation inside modal */
  const next = useCallback(() => {
    if (!preview) return;
    const list = filteredList;
    const index = list.findIndex((i) => i._id === preview._id);
    const nextItem = list[(index + 1) % list.length];
    setPreview(nextItem);
  }, [preview, filteredList]);

  const prev = useCallback(() => {
    if (!preview) return;
    const list = filteredList;
    const index = list.findIndex((i) => i._id === preview._id);
    const prevItem = list[(index - 1 + list.length) % list.length];
    setPreview(prevItem);
  }, [preview, filteredList]);

  /** Keyboard Controls */
  useEffect(() => {
    const keyHandler = (e) => {
      if (!preview) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [preview, next, prev]);

  return (
    <div className="min-h-screen bg-[#f5f5f7] pt-20 px-4 sm:px-6">

      {/* HEADING */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
        School Gallery
      </h1>

      {/* FILTER TABS */}
      <div className="flex gap-2 sm:gap-3 mb-8 overflow-x-auto pb-1">
        {["all", "image", "video", "event"].map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 sm:px-5 py-2 rounded-full font-semibold capitalize transition-all
              ${filter === t
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            {t === "all" ? "All" : t === "image" ? "Images" : t === "video" ? "Videos" : "Events"}
          </button>
        ))}
      </div>

      {/* GALLERY GRID (Optimized masonry) */}
      <div className="
        columns-2 
        sm:columns-3 
        md:columns-4 
        lg:columns-5
        gap-4 space-y-4">

        {filteredList.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.02 }}
            onClick={() => openPreview(item)}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition break-inside-avoid cursor-pointer group"
          >
            {/* TYPE BADGE */}
            <div className="absolute top-2 left-2 z-20 px-2 py-[2px] text-[10px]
              font-bold rounded-full bg-white/40 backdrop-blur-md text-gray-900 opacity-0
              group-hover:opacity-100 transition">
              {item.type.toUpperCase()}
            </div>

            {/* IMAGE / VIDEO WITH BLUR PLACEHOLDER */}
            {item.type === "image" ? (
              <div className="relative">
                <img
                  src={item.blur}
                  className="absolute inset-0 w-full h-full object-cover blur-xl"
                />
                <img
                  src={item.tiny}
                  loading="lazy"
                  className="relative w-full rounded-xl object-cover transition duration-700 ease-out"
                />
              </div>
            ) : (
              <video
                src={item.url}
                muted
                loading="lazy"
                className="w-full rounded-xl object-cover"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* PREVIEW MODAL (HD image only here) */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-[999]"
            onClick={() => setPreview(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 z-50 text-white bg-black/40 backdrop-blur p-2 rounded-full hover:bg-black/60 transition text-xl"
                onClick={() => setPreview(null)}
              >
                ✕
              </button>

              {/* Media */}
              {preview.type === "video" ? (
                <video
                  src={preview.url}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] object-contain"
                />
              ) : (
                <img
                  src={preview.hd}
                  className="w-full max-h-[80vh] object-contain"
                />
              )}

              {/* Navigation */}
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur text-white p-3 rounded-full hover:bg-black/60"
                onClick={prev}
              >
                ◀
              </button>

              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur text-white p-3 rounded-full hover:bg-black/60"
                onClick={next}
              >
                ▶
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default AppleGalleryPro;
