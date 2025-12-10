// src/components/Achievement/SessionSection.jsx

import AchievementCard from "./AchievementCard";

const SessionSection = ({ session, items, onEdit, onDelete }) => {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-yellow-700 mb-4 border-b pb-2">
        Session: {session}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item._id} className="space-y-4">

            {/* CARD */}
            <AchievementCard ach={item} />

            {/* BUTTONS */}
            <div className="flex justify-between">
              <button
                onClick={() => onEdit(item._id)  }
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                ✏️ Edit
              </button>

              <button
                onClick={() => onDelete(item._id) }
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                🗑 Delete
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionSection;
