import { useContext } from "react";
import { NoticeContext } from "./NoticeContext";

export const useNoticeContext = () => {
  return useContext(NoticeContext);
};
