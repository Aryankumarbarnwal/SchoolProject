import { useEffect, useState } from "react";
import { getPublicHomepageNotices } from "../../utils/noticeAPI";
import { useNoticeContext } from "../../Context/useNoticeContext.jsx";

const NoticeTicker = () => {
  const [notices, setNotices] = useState([]);
  const { openPopup } = useNoticeContext();

  // Fetch public homepage notices
  useEffect(() => {
    getPublicHomepageNotices()
      .then((res) => {
        if (Array.isArray(res.data)) setNotices(res.data);
      })
      .catch((err) => console.error("Notice fetch error:", err));
  }, []);

  // No notices → hide ticker
  if (!notices || notices.length === 0) return null;

  // Duplicate notices for smooth infinite loop
  const loopNotices = notices;

  return (
    <div className="w-full bg-yellow-600 text-white py-1 rounded-lg shadow-md overflow-hidden select-none">
      
      <div className="relative w-full overflow-hidden">
        
        {/* Moving Text Container */}
        <div
          className="flex whitespace-nowrap animate-ticker"
          style={{ animationDuration: `${loopNotices.length * 10}s` }}
        >
          {loopNotices.map((n, i) => (
            <span
              key={`${n._id}-${i}`}
              onClick={() => openPopup(n)}
              className="mx-5 cursor-pointer hover:text-yellow-300 hover:underline transition-all text-sm md:text-base"
            >
              {n.title}
            </span>
          ))}
        </div>

      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes tickerMove {
            30% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-ticker {
            animation: tickerMove linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default NoticeTicker;
