import { FiX } from "react-icons/fi";

const AdmissionModal = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 relative animate-fadeIn">
        <FiX
          className="absolute top-4 right-4 text-2xl cursor-pointer"
          onClick={onClose}
        />

        <h2 className="text-xl font-bold mb-4">Admission Details</h2>

        {Object.keys(data).map((key) => (
          key !== "__v" &&
          key !== "_id" &&
          <div key={key} className="mb-2">
            <strong className="capitalize">{key}: </strong>
            {data[key] ? (
              typeof data[key] === "string" && data[key].startsWith("http") ? (
                <a
                  href={data[key]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  View Document
                </a>
              ) : (
                data[key]
              )
            ) : (
              "—"
            )}
          </div>
        ))}
      </div>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(.9); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default AdmissionModal;
