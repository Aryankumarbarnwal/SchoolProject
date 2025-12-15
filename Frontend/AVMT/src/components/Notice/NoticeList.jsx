
const NoticeList = ({ notices, onClick }) => {
  if (!notices || notices.length === 0) {
    return (
      <p className="text-center text-gray-600 py-10 text-lg">
        No notices available.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4">
      {notices.map((n) => (
        <div
          key={n._id}
          onClick={() => onClick && onClick(n)}
          className="
            cursor-pointer border bg-white rounded-2xl shadow-md 
            hover:shadow-xl transition-all duration-300 p-5 
            flex flex-col group
          "
        >
          {/* Title */}
          <h3 className="text-xl font-bold text-yellow-700 mb-2 group-hover:text-yellow-800 transition">
            {n.title}
          </h3>

          {/* Date */}
          <p className="text-sm text-gray-500 mb-3">
            {new Date(n.createdAt).toLocaleDateString()}
          </p>

          {/* Image */}
          {n.image && (
            <img
              src={n.image}
              alt="Notice"
              className="w-full h-40 object-cover rounded-xl mb-3 border shadow-sm 
              group-hover:scale-[1.02] transition-all duration-300"
            />
          )}

          {/* Description Preview */}
          <p className="text-gray-700 text-sm flex-grow line-clamp-3">
            {n.description}
          </p>

          <button
            className="
              mt-4 text-yellow-700 font-semibold hover:underline 
              group-hover:text-yellow-800 transition
            "
          >
            Read More →
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoticeList;

