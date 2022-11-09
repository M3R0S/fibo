import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useGetParamsPopup from "../../../../../hook/popupHook/useGetParamsPopup";
import useMountedPopup from "../../../../../hook/popupHook/useMountedPopup";
import PopupOverlay from "../../../../ui/components/popup/PopupOverlay";
import PopupPortal from "../../../../ui/components/popup/PopupPortal";
import MainProductPopupContainer from "./MainProductPopupContainer";

interface IMainProductPopupApp {
  isOpened: boolean;
}

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
      <MainProductPopupContainer
        onClose={onClose}
        params={params}
        isOpened={isOpened}
      />
    </PopupPortal>
  );
};

export default MainProductPopupApp;
