import { FC } from "react";
import useMountedPopup from "hook/useMountedPopup/useMountedPopup";
import useGetParamsPopup from "hook/useGetParamsPopup/useGetParamsPopup";
import PopupOverlay from "components/ui/components/popup/popupOverlay/PopupOverlay";
import PromotionPopupContainer from "../container/PromotionPopupContainer";
import PopupPortal from "components/ui/components/popup/popupPortal/PopupPortal";
import useGoBack from "hook/useGoBack/useGoBack";
import { IPromotionPopupApp } from "./types";

const PromotionPopupApp: FC<IPromotionPopupApp> = ({ isOpenPopup }) => {
  const isMountedPopup = useMountedPopup(isOpenPopup);
  const params = useGetParamsPopup();
  const { goBack: closePopup } = useGoBack();

  if (!isMountedPopup) {
    return null;
  }

  return (
    <PopupPortal>
      <PopupOverlay isOpened={isOpenPopup} onClose={closePopup} />
      <PromotionPopupContainer isOpened={isOpenPopup} onClose={closePopup} params={params} />
    </PopupPortal>
  );
};

export default PromotionPopupApp;
