import { useNoticeContext } from "../../Context/useNoticeContext.jsx";

const NoticePopup = () => {
  const { activeNotice, closePopup } = useNoticeContext();

  if (!activeNotice) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={closePopup}
    >
      {/* Popup Body */}
      <div
        className="
          bg-white rounded-2xl shadow-2xl relative animate-fadeIn
          max-w-lg w-full 
          max-h-[85vh] overflow-y-auto 
          p-5 sm:p-6 
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-3xl font-bold cursor-pointer"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-yellow-700 mb-2">
          {activeNotice.title}
        </h2>

        {/* Date */}
        <p className="text-xs sm:text-sm text-gray-500 mb-4">
          {new Date(activeNotice.createdAt).toLocaleDateString()}
        </p>

        {/* Image */}
        {activeNotice.image && (
          <img
            src={activeNotice.image}
            alt="Notice"
            className="
              w-full max-h-64 sm:max-h-72 
              object-contain rounded-lg border mb-4
            "
          />
        )}

        {/* Description */}
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base whitespace-pre-line">
          {activeNotice.description || "No additional details available."}
        </p>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.92); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.25s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default NoticePopup;
