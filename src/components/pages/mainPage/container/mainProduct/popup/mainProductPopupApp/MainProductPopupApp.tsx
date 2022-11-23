import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useGetParamsPopup from "hook/useGetParamsPopup/useGetParamsPopup";
import useMountedPopup from "hook/useMountedPopup/useMountedPopup";
import PopupOverlay from "components/ui/components/popup/popupOverlay/PopupOverlay";
import PopupPortal from "components/ui/components/popup/popupPortal/PopupPortal";
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
