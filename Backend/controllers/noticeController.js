import Notice from "../models/Notice.js";

// ➤ Create New Notice
export const createNotice = async (req, res) => {
  try {
    const notice = await Notice.create(req.body);
    res.json({ message: "Notice created", data: notice });
  } catch (err) {
    console.error("NOTICE CREATE ERROR:", err);
    res.status(500).json({
      message: "Cannot create notice",
      err: err,
    });
  }
};

// ➤ Get Notices (Filtered by audience)
export const getNotices = async (req, res) => {
  try {
    const { audience } = req.query;

    const filter = audience ? { audience } : {};

    const notices = await Notice.find(filter).sort({ createdAt: -1 });

    res.json(notices);
  } catch (err) {
    res.status(500).json({ message: "Cannot fetch notices", err });
  }
};

// ➤ Get Single Notice
export const getNoticeById = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    res.json(notice);
  } catch (err) {
    res.status(500).json({ message: "Cannot fetch notice", err });
  }
};

// ➤ Update Notice
export const updateNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(notice);
  } catch (err) {
    res.status(500).json({ message: "Cannot update notice", err });
  }
};

// ➤ Delete Notice
export const deleteNotice = async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: "Notice deleted" });
  } catch (err) {
    res.status(500).json({ message: "Cannot delete notice", err });
  }
};

export const getPublicHomepageNotices = () =>
  noticeAPI.get("/?audience=Public&homepage=true");

