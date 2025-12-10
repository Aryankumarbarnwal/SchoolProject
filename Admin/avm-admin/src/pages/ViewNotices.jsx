// src/pages/ViewNotices.jsx

import { useEffect, useState } from "react";
import { getNotices, deleteNotice } from "../utils/noticeAPI";
import NoticeCard from "../components/NoticeCard.jsx"
import { useNavigate } from "react-router-dom";

const ViewNotices = () => {
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await getNotices();
    setNotices(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteNotice(id);
    fetchData();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-yellow-700">All Notices</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {notices.map((notice) => (
          <NoticeCard
            key={notice._id}
            notice={notice}
            onEdit={() => navigate(`/admin/edit-notice/${notice._id}`)}
            onDelete={() => handleDelete(notice._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewNotices;
