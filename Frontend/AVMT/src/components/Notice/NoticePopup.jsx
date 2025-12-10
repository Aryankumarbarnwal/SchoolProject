import { useNoticeContext } from "../../Context/useNoticeContext.jsx";

const NoticePopup = () => {
  const { activeNotice, closePopup } = useNoticeContext();

  if (!activeNotice) return null; // nothing open

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={closePopup} // click outside closes
    >
      {/* Popup Body */}
      <div
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 relative animate-fadeIn overflow-hidden"
        onClick={(e) => e.stopPropagation()} // stop outside close
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl font-bold cursor-pointer"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-yellow-700 mb-2">
          {activeNotice.title}
        </h2>

        {/* Date */}
        <p className="text-sm text-gray-500 mb-4">
          {new Date(activeNotice.createdAt).toLocaleDateString()}
        </p>

        {/* Image if exists */}
        {activeNotice.image && (
          <img
            src={activeNotice.image}
            alt="Notice"
            className="w-full rounded-lg mb-4 border object-contain max-h-60"
          />
        )}

        {/* Description */}
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          {activeNotice.description || "No additional details available."}
        </p>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.9); }
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
