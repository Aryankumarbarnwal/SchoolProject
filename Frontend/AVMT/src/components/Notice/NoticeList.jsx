
const NoticeList = ({ notices, onClick }) => {
  if (!notices || notices.length === 0) {
    return (
      <p className="text-center text-gray-600 py-10 text-lg">
        No notices available.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notices.map((n) => (
        <div
          key={n._id}
          onClick={() => onClick && onClick(n)}
          className="cursor-pointer border bg-white rounded-xl shadow hover:shadow-lg p-5 transition"
        >
          {/* Title */}
          <h3 className="text-xl font-bold text-yellow-700 mb-2">
            {n.title}
          </h3>

          {/* Date */}
          <p className="text-sm text-gray-500 mb-3">
            {new Date(n.createdAt).toLocaleDateString()}
          </p>

          {/* Image preview */}
          {n.image && (
            <img
              src={n.image}
              alt="Notice"
              className="w-full h-40 object-cover rounded mb-3 border"
            />
          )}

          {/* Preview Desc */}
          <p className="text-gray-700 text-sm">
            {n.description.slice(0, 100)}...
          </p>

          <button className="mt-3 text-yellow-700 font-semibold hover:underline">
            Read More →
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoticeList;
