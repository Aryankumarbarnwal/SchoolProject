// src/pages/AllNotices.jsx

import { useEffect, useState } from "react";
import NoticeList from "../components/Notice/NoticeList";
import { getNotices } from "../utils/noticeAPI";
import { useNoticeContext} from "../Context/useNoticeContext"

const AllNotices = () => {
  const [notices, setNotices] = useState([]);
  const { openPopup } = useNoticeContext();

  useEffect(() => {
    getNotices("Public")   // only public notices
      .then((res) => setNotices(res.data))
      .catch((err) => console.error("Notice loading error:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-yellow-700 mb-6 text-center">
        All Public Notices
      </h1>

      <NoticeList notices={notices} onClick={openPopup} />
    </div>
  );
};

export default AllNotices;
