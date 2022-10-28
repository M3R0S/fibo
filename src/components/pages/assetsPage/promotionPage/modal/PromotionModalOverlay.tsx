import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hook/storeHook/useStore";
import cl from "../../../../../assets/styles/pages/promotionPage/modal/promotionModal.module.sass";
import { setClosedPromotionModalItem } from "../../../../../store/slice/promotion/promotionSlice";

const PromotionModalOverlay = () => {
  const { openModal } = useAppSelector((state) => state.promotionPage);
  const dispatch = useAppDispatch();

  return (
    <div
      className={
        openModal
          ? [cl.overlay, cl.overlay_enabled].join(" ")
          : [cl.overlay, cl.overlay_disabled].join(" ")
      }
      onClick={() => dispatch(setClosedPromotionModalItem())}
    />
  );
};

export default PromotionModalOverlay;
