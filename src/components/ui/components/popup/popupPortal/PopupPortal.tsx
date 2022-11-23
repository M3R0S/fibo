import { FC } from "react";
import ReactDOM from "react-dom";
import { IPopupPortal } from "./types";
import usePopupPortal from "./usePopupPortal";

const PopupPortal: FC<IPopupPortal> = ({ children }) => {
  const { container } = usePopupPortal();

  return ReactDOM.createPortal(children, container);
};

export default PopupPortal;
