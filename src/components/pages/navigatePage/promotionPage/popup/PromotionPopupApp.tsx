import React, { FC } from "react";
import useMountedPopup from "../../../../../hook/popupHook/useMountedPopup";
import { useNavigate } from "react-router-dom";
import useUpdateLocationStatePopup from "../../../../../hook/popupHook/useUpdateLocationStatePopup";
import PopupOverlay from "../../../../ui/components/popup/PopupOverlay";
import PromotionPopupContainer from "./PromotionPopupContainer";
import PopupPortal from "../../../../ui/components/popup/PopupPortal";

interface IPromotionPopupApp {
  isOpenPopup: boolean;
}

const PromotionPopupApp: FC<IPromotionPopupApp> = ({ isOpenPopup }) => {
  const isMountedPopup = useMountedPopup(isOpenPopup);
  const navigate = useNavigate();
  const endpoints = useUpdateLocationStatePopup();

  function onClosePopup() {
    navigate(-1);
  }

  if (!isMountedPopup) {
    return null;
  }

  return (
    <PopupPortal>
      <PopupOverlay isOpened={isOpenPopup} onClose={onClosePopup} />
      <PromotionPopupContainer
        isOpened={isOpenPopup}
        onClose={onClosePopup}
        endpoints={endpoints}
      />
    </PopupPortal>
  );
};

export default PromotionPopupApp;
