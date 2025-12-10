// src/components/Achievement/AchievementCard.jsx

const AchievementCard = ({ ach}) => {
  return (
    <div className="bg-white shadow-lg p-5 rounded-xl border border-gray-200 hover:shadow-2xl transition-all duration-200">

      {/* Category & Session */}
      <h3 className="text-xl font-bold text-gray-800">{ach.category}</h3>
      <p className="text-gray-500 text-sm mb-3">Session: {ach.session}</p>

      {/* Students List */}
      <div className="space-y-3">
        {ach.students?.map((stu, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border hover:bg-gray-100 transition"
          >
            {/* Photo */}
            <img
              src={stu.photo || "https://via.placeholder.com/50"}
              alt="student"
              className="w-14 h-14 rounded-full object-cover border"
            />

            {/* Details */}
            <div className="flex-1">
              <p className="font-semibold text-lg text-gray-800">{stu.name}</p>
              <p className="text-sm text-gray-600">Class: {stu.className}</p>

              {/* Marks & Percentage */}
              <p className="text-sm font-medium text-blue-700">
                Marks: {stu.marks || "—"}
              </p>

              <p className="text-sm font-medium text-green-700">
                Percentage: {stu.percentage || "—"}%
              </p>

              {/* Badge */}
              {stu.badge && (
                <p className="text-sm text-yellow-700 font-bold">
                  🎖 {stu.badge}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AchievementCard;
