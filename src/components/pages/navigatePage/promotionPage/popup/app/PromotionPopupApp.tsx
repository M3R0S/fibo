import { FC } from "react";
import useGetParamsPopup from "hook/useGetParamsPopup/useGetParamsPopup";
import PopupOverlay from "components/ui/components/popup/popupOverlay/PopupOverlay";
import PromotionPopupContainer from "../container/PromotionPopupContainer";
import PopupPortal from "components/ui/components/popup/popupPortal/PopupPortal";
import useClosePopup from "hook/useClosePopup/useClosePopup";

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
