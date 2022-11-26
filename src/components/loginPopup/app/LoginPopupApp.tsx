import { FC } from "react";
import PopupOverlay from "components/ui/components/popup/popupOverlay/PopupOverlay";
import PopupPortal from "components/ui/components/popup/popupPortal/PopupPortal";
import useClosePopup from "hook/useClosePopup/useClosePopup";
import LoginPopupContainer from "../container/LoginPopupContainer";

const LoginPopupApp: FC = () => {
  const { closePopup, isOpened } = useClosePopup();

  return (
    <PopupPortal>
      <PopupOverlay isOpened={isOpened} onClose={closePopup} />
      <LoginPopupContainer onClose={closePopup} />
    </PopupPortal>
  );
};

export default LoginPopupApp;
