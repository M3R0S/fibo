import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hook/storeHook/useStore";
import { setClosedModalMainPosition } from "../../../../../store/slice/mainPosition/mainPositionSlice";
import cl from "../../../../assets/styles/pages/mainPage/mainPosition/mainPositionModal.module.sass";

const MainPositionModalOverlay: FC = () => {
  const { openModal } = useAppSelector((state) => state.mainPositionSlice);
  const dispatch = useAppDispatch();

  return (
    <div
      className={
        openModal
          ? [cl.overlay, cl.overlay_enabled].join(" ")
          : [cl.overlay, cl.overlay_disabled].join(" ")
      }
      onClick={() => dispatch(setClosedModalMainPosition())}
    />
  );
};

export default MainPositionModalOverlay;
