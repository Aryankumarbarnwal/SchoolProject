const UpcomingEvents = ({ events = [], emptyImage }) => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-yellow-700 mb-10">
        🎉 Upcoming Events
      </h2>

      {/* If NO EVENTS → show image instead of text */}
      {events.length === 0 ? (
        <div className="flex justify-center">
          <img
            src={emptyImage}        // <-- You will pass image here
            alt="No Events"
            className="w-64 sm:w-80 md:w-96 opacity-90 rounded-xl shadow-lg"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-0">
          {events.map((ev, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={ev.poster}
                alt={ev.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 space-y-2">
                <span className="text-sm bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">
                  {ev.date}
                </span>

                <h3 className="text-xl font-bold text-gray-800">{ev.title}</h3>
                <p className="text-gray-600">{ev.description}</p>

                {ev.link && (
                  <a
                    href={ev.link}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Know More →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;

