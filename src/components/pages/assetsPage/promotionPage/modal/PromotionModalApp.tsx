import React, { FC, useEffect } from "react";
import cl from "../../../../../assets/styles/pages/promotionPage/modal/promotionModal.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hook/storeHook/useStore";
import useModalMountedPromotion from "../../../../../hook/modalHook/useModalMountedPromotion";
import { setClosedPromotionModalItem } from "../../../../../store/slice/promotion/promotionSlice";
import PromotionItemModal from "./PromotionModalContent";
import ModalPortal from "../../../../ui/components/portal/ModalPortal";
import PromotionModalOverlay from "./PromotionModalOverlay";

const PromotionModalApp: FC = () => {
  const { openModal } = useAppSelector((state) => state.promotionPage);
  const dispatch = useAppDispatch();

  const { mounted } = useModalMountedPromotion({ isOpened: openModal });

  function eventEscape(e: KeyboardEvent) {
    if (e.code === "Escape") {
      dispatch(setClosedPromotionModalItem());
    }
  }

  useEffect(() => {
    if (openModal) {
      document.addEventListener("keydown", eventEscape);
    }
    return () => {
      if (openModal) {
        dispatch(setClosedPromotionModalItem());
      }
      document.removeEventListener("keydown", eventEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  if (!mounted) {
    return null;
  }

  return (
    <ModalPortal className={cl.modal_card_cont}>
      <PromotionModalOverlay />
      <PromotionItemModal />
    </ModalPortal>
  );
};

export default PromotionModalApp;
