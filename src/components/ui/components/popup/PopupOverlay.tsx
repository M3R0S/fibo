import { FC, useEffect } from "react";
import cl from "./popup.module.sass";

export interface IPopupOverlay {
  isOpened: boolean;
  onClose: () => void;
}

const PopupOverlay: FC<IPopupOverlay> = ({ isOpened, onClose }) => {
  function eventEscape(e: KeyboardEvent) {
    if (e.code === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    if (isOpened) {
      document.addEventListener("keydown", eventEscape);
    }
    return () => {
      if (isOpened) {
        // onClose();
      }
      document.removeEventListener("keydown", eventEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened]);

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
