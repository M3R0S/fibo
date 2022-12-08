import { FC } from "react";
import PopupOverlay from "components/ui";
import PopupPortal from "components/ui";
import { useClosePopup } from "hook";
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
