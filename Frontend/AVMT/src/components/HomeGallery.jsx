import { useEffect, useState } from "react";
import { getGalleryItems } from "../utils/galleryAPI";
import { Link } from "react-router-dom";

const GalleryPreview = () => {
  const [recent, setRecent] = useState([]);
  const [preview, setPreview] = useState(null);

  const fetchRecent = async () => {
    try {
      const res = await getGalleryItems(1);
      const list = res.data.items || res.data;

      const optimized = list.slice(0, 10).map((item) => ({
        ...item,

        // --- IMAGE & VIDEO TINY VERSION ---
        tiny:
          item.type === "image"
            ? item.url + "?w=200&auto=compress&fit=crop"
            : item.url + "?q=20&w=200&auto=compress",

        // --- HD IMAGE & VIDEO ---
        hd:
          item.type === "image"
            ? item.url + "?w=1200&auto=compress"
            : item.url + "?q=80&w=1200&auto=compress",

        // --- POSTER FOR VIDEO ---
        poster:
          item.type === "video"
            ? item.url.replace(".mp4", ".jpg").replace("/upload/", "/upload/w_300,f_jpg,q_auto/")
            : null,
      }));

      setRecent(optimized);

    } catch {
      console.log("Error loading gallery preview");
    }
  };

  useEffect(() => {
    fetchRecent();
  }, []);

  return (
    <>
      <section className="py-10 bg-gradient-to-br from-yellow-100 via-white to-yellow-200">
        <div className="max-w-7xl mx-auto px-3 ">

          <h2 className="text-4xl font-extrabold text-center text-yellow-700 mb-8 drop-shadow">
            School Gallery
          </h2>

          {/* MOBILE VIEW */}
          <div className="block md:hidden">
            <div className="grid grid-cols-5 gap-[2px] h-[220px] overflow-y-scroll pr-1">

              {recent.map((item) => (
                <div key={item._id}>
                  {item.type === "image" ? (
                    <img
                      src={item.tiny}
                      loading="lazy"
                      onClick={() => setPreview(item)}
                      className="w-full h-16 object-cover rounded-md cursor-pointer hover:scale-105 transition"
                    />
                  ) : (
                    <video
                      src={item.tiny}
                      poster={item.poster}
                      preload="none"
                      muted
                      playsInline
                      onClick={() => setPreview(item)}
                      className="w-full h-16 object-cover rounded-md cursor-pointer"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile button ONLY */}
            <div className="flex justify-center mt-2 md:hidden">
              <Link
                to="/gallery"
                className="px-6 py-2 bg-yellow-600 text-white rounded-full text-base font-semibold shadow-lg hover:bg-yellow-700"
              >
                View Full Gallery
              </Link>
            </div>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden md:flex gap-6 overflow-x-auto pb-4 px-2">
            {recent.slice(0, 8).map((item) => (
              <div
                key={item._id}
                onClick={() => setPreview(item)}
                className="min-w-[260px] rounded-xl bg-white shadow-xl cursor-pointer hover:scale-[1.03] transition"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden group">
                  {item.type === "image" ? (
                    <img
                      src={item.tiny}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:brightness-90 transition"
                    />
                  ) : (
                    <video
                      src={item.tiny}
                      poster={item.poster}
                      preload="none"
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )}

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

            {/* Desktop view button */}
            <Link
              to="/gallery"
              className="min-w-[260px] hidden md:flex justify-center items-center rounded-xl bg-white border-2 border-yellow-500 text-yellow-600 text-lg font-bold shadow-lg"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>

        {/* Desktop Explore button ONLY */}
        <div className="flex justify-center mt-6 hidden md:flex">
          <Link
            to="/gallery"
            className="px-8 py-3 bg-yellow-600 text-white text-lg font-semibold rounded-full shadow-xl hover:bg-yellow-700"
          >
            Explore Full Gallery
          </Link>
        </div>
      </section>

      {/* Modal */}
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
                <video src={preview.hd} controls autoPlay className="max-h-[70vh] rounded" />
              ) : (
                <img src={preview.hd} className="max-h-[70vh] rounded object-contain" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPreview;
