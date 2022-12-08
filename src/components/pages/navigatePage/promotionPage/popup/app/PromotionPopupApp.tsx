import { FC } from "react";
import { useGetParamsPopup } from "hook";
import PopupOverlay from "components/ui";
import PromotionPopupContainer from "../container/PromotionPopupContainer";
import PopupPortal from "components/ui";
import { useClosePopup } from "hook";

const PromotionPopupApp: FC = () => {
    const params = useGetParamsPopup();
    const { closePopup, isOpened } = useClosePopup();

    return (
        <PopupPortal>
            <PopupOverlay isOpened={isOpened} onClose={closePopup} />
            <PromotionPopupContainer isOpened={isOpened} onClose={closePopup} params={params} />
        </PopupPortal>
    );
};

export default PromotionPopupApp;
