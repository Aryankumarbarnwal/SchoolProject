import { useEffect, useState } from "react";

const StatsCard = ({ label, value, suffix = "", duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Number(value);
    if (end === 0) return;

    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="bg-white/80 backdrop-blur-lg shadow-md hover:shadow-xl transition rounded-2xl p-5 border border-yellow-100 flex flex-col items-center text-center">
      <p className="text-3xl md:text-4xl font-extrabold text-yellow-700">
        {count}
        <span className="text-2xl md:text-3xl text-yellow-600">{suffix}</span>
      </p>
      <p className="mt-2 text-gray-700 font-semibold">{label}</p>
    </div>
  );
};

export default StatsCard;
