// src/components/Notice/NoticeCard.jsx

const NoticeCard = ({ notice, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow border">
      <h2 className="text-xl font-bold text-gray-800">{notice.title}</h2>

      <p className="text-gray-600 mt-2">{notice.description}</p>

      {notice.image && (
        <img
          src={notice.image}
          className="w-full h-48 object-cover rounded-lg mt-3 border"
          alt="Notice"
        />
      )}

      <div className="flex justify-between mt-4">
        {onEdit && (
          <button
            onClick={onEdit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Edit
          </button>
        )}

        {onDelete && (
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default NoticeCard;
