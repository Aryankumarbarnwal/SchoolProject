import { X } from "lucide-react";

const NoticeModal = ({ notice, onClose }) => {
  if (!notice) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-3">
      
      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl p-6 relative animate-fade-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-600 hover:text-red-800"
        >
          <X size={28} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-yellow-700 text-center mb-4">
          {notice.title}
        </h2>

        {/* IMAGE */}
        {notice.image && (
          <img
            src={notice.image}
            className="w-full max-h-72 object-contain rounded-lg mb-4 shadow"
            alt="notice"
          />
        )}

        {/* DESCRIPTION */}
        {notice.description && (
          <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
            {notice.description}
          </p>
        )}

        {/* CATEGORY & AUDIENCE */}
        <div className="mt-4 p-3 bg-gray-100 rounded-lg text-sm text-gray-600">
          <p><strong>Category:</strong> {notice.category}</p>
          <p><strong>Audience:</strong> {notice.audience}</p>
        </div>

      </div>

      {/* Animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.25s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NoticeModal;
