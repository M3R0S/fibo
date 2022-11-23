import { FC } from "react";
import cl from "./popupOverlay.module.sass";
import { IPopupOverlay } from "./types";
import usePopupOverlay from "./usePopupOverlay";

const PopupOverlay: FC<IPopupOverlay> = ({ isOpened, onClose }) => {
  usePopupOverlay({ isOpened, onClose });

  return (
    <div
      className={
        isOpened
          ? [cl.overlay, cl.overlay_enabled].join(" ")
          : [cl.overlay, cl.overlay_disabled].join(" ")
      }
      onClick={onClose}
      tabIndex={0}
    />
  );
};

export default PopupOverlay;
