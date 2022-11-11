import { FC, useEffect, useCallback } from "react";
import cl from "./popup.module.sass";

export interface IPopupOverlay {
  isOpened: boolean;
  onClose: () => void;
}

const PopupOverlay: FC<IPopupOverlay> = ({ isOpened, onClose }) => {
  const eventEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpened) {
      document.addEventListener("keydown", eventEscape);
    }
    return () => {
      document.removeEventListener("keydown", eventEscape);
    };
  }, [eventEscape, isOpened]);

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
