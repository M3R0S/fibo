import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetParamsPopup } from "hook";
import { useMountedPopup } from "hook";
import PopupOverlay from "components/ui";
import PopupPortal from "components/ui";
import MainProductPopupContainer from "../mainProductPopupContainer/MainProductPopupContainer";
import { IMainProductPopupApp } from "../types";

const MainProductPopupApp: FC<IMainProductPopupApp> = ({ isOpened }) => {
    const navigate = useNavigate();
    const params = useGetParamsPopup();
    const mounted = useMountedPopup(isOpened);

    function onClose() {
        navigate(-1);
    }

    if (!mounted) {
        return null;
    }

    return (
        <PopupPortal>
            <PopupOverlay isOpened={isOpened} onClose={onClose} />
            <MainProductPopupContainer onClose={onClose} params={params} isOpened={isOpened} />
        </PopupPortal>
    );
};

export default MainProductPopupApp;
