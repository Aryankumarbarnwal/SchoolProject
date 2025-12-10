import { useEffect, useState } from "react";
import { getGalleryItems } from "../utils/galleryAPI";
import { Link } from "react-router-dom";

const GalleryPreview = () => {
  const [recent, setRecent] = useState([]);
  const [preview, setPreview] = useState(null); // For modal

  const fetchRecent = async () => {
    try {
      const res = await getGalleryItems(1);
      const list = res.data.items || res.data;
      setRecent(list.slice(0, 8));
    } catch {
      console.log("Error loading gallery preview");
    }
  };

  useEffect(() => {
    fetchRecent();
  }, []);

  return (
    <>
      {/* MAIN SECTION */}
      <section className="py-16 bg-gradient-to-br from-yellow-100 via-white to-yellow-200">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold text-center text-yellow-700 mb-8 drop-shadow">
            School Gallery
          </h2>

          {/* Horizontal Scroll */}
          <div className="flex gap-6 overflow-x-auto pb-4 px-2 scrollbar-thin scrollbar-thumb-yellow-500">
            {recent.map((item) => (
              <div
                key={item._id}
                onClick={() => setPreview(item)}
                className="min-w-[260px] rounded-xl shadow-xl bg-white cursor-pointer
                           hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gray-200 group relative">

                  {/* Image Preview */}
                  {item.type === "image" && (
                    <img
                      src={item.url}
                      className="w-full h-full object-cover group-hover:brightness-90 transition"
                      loading="lazy"
                    />
                  )}

                  {/* Video Preview (autoPlay on hover) */}
                  {item.type === "video" && (
                    <video
                      src={item.url}
                      muted
                      className="w-full h-full object-cover"
                      onMouseEnter={e => e.target.play()}
                      onMouseLeave={e => e.target.pause()}
                    />
                  )}

                  {/* Overlay label */}
                  <span className="absolute bottom-2 right-2 bg-yellow-600 text-white text-xs px-2 py-1 rounded-full shadow">
                    {item.type}
                  </span>
                </div>

                <div className="p-3">
                  <p className="font-semibold text-gray-900 text-base truncate">
                    {item.caption || "Untitled"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.event || "General"}
                  </p>
                </div>
              </div>
            ))}

            {/* View Full Gallery Card */}
            <Link
              to="/gallery"
              className="min-w-[260px] flex justify-center items-center rounded-xl bg-white border-2
                         border-yellow-500 text-yellow-600 text-lg font-bold shadow-lg hover:bg-yellow-50
                         transition-all duration-300"
            >
              View Full Gallery →
            </Link>
          </div>

          {/* Explore Button */}
          <div className="flex justify-center mt-6">
            <Link
              to="/gallery"
              className="px-8 py-3 bg-yellow-600 text-white text-lg font-semibold rounded-full
                         shadow-xl hover:bg-yellow-700 hover:scale-105 transition"
            >
              Explore Full Gallery
            </Link>
          </div>

        </div>
      </section>

      {/* PREVIEW MODAL */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] p-4 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 text-2xl font-bold text-gray-700"
              onClick={() => setPreview(null)}
            >
              ✕
            </button>

            <div className="flex justify-center">
              {preview.type === "video" ? (
                <video
                  src={preview.url}
                  controls
                  autoPlay
                  className="max-h-[70vh] rounded"
                />
              ) : (
                <img
                  src={preview.url}
                  className="max-h-[70vh] rounded object-contain"
                />
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold">{preview.caption}</h3>
              <p className="text-gray-600 text-sm">{preview.event}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPreview;
