import { useEffect, useState } from "react";
import { getPublicHomepageNotices } from "../../utils/noticeAPI";
import { useNoticeContext } from "../../Context/useNoticeContext.jsx";

const NoticeTicker = () => {
  const [notices, setNotices] = useState([]);
  const { openPopup } = useNoticeContext();

  // Fetch notices
  useEffect(() => {
    getPublicHomepageNotices()
      .then((res) => {
        if (Array.isArray(res.data)) setNotices(res.data);
      })
      .catch((err) => console.error("Notice fetch error:", err));
  }, []);

  if (!notices.length) return null;

  // duplicate notices for infinite loop
  const loopNotices = [...notices];

  return (
    <div className="w-full bg-yellow-600 text-white py-2 overflow-hidden shadow-md select-none ticker-container">

      {/* Ticker wrapper */}
      <div className="ticker-content">
        {loopNotices.map((n, i) => (
          <span
            key={i}
            onClick={() => openPopup(n)}
            className="mx-6 cursor-pointer hover:text-yellow-300 hover:underline text-sm sm:text-base"
          >
            {n.title}
            <span className="mx-6 text-white/60">|</span>
          </span>
        ))}
      </div>

      {/* CSS */}
      <style>
        {`
          .ticker-container {
            position: relative;
            overflow: hidden;
          }

          .ticker-content {
            display: inline-block;
            white-space: nowrap;
            padding-left: 100%;
            animation: scrollLeft linear infinite;
            animation-duration: 15s;
          }

          /* HOVER → PAUSE */
          .ticker-container:hover .ticker-content {
            animation-play-state: paused;
          }

          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

    </div>
  );
};

export default NoticeTicker;
