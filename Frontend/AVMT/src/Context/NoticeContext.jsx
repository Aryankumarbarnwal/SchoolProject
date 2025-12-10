import { createContext, useState } from "react";

export const NoticeContext = createContext();

export const NoticeProvider = ({ children }) => {
  const [activeNotice, setActiveNotice] = useState(null);

  const openPopup = (notice) => setActiveNotice(notice);
  const closePopup = () => setActiveNotice(null);

  return (
    <NoticeContext.Provider value={{ activeNotice, openPopup, closePopup }}>
      {children}
    </NoticeContext.Provider>
  );
};
