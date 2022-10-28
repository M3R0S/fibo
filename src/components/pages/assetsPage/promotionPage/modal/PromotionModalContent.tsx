import React, { FC } from "react";
import cl from "../../../../../assets/styles/pages/promotionPage/modal/promotionModal.module.sass";
import { useAppSelector } from "../../../../../hook/storeHook/useStore";
import promotionApi from "../../../../../store/slice/promotion/promotionApi";
import Loader from "../../../../ui/assets/loader/Loader";
import PromotionModalItem from "./PromotionModalItem";

const PromotionModalContent: FC = () => {
  const { idModal, openModal } = useAppSelector((state) => state.promotionPage);

  const {
    data: modalItem,
    isLoading,
    error,
  } = promotionApi.useGetPromotionModalItemQuery(idModal);

  return (
    <article
      className={
        !openModal
          ? [cl.modal_card, cl.modal_card_disabled].join(" ")
          : !isLoading && modalItem
          ? [cl.modal_card, cl.modal_card_enabled].join(" ")
          : isLoading && !modalItem
          ? [cl.modal_card, cl.modal_card_loading].join(" ")
          : cl.modal_card
      }
    >
      {error && <h1>Ошибка</h1>}
      {isLoading && <Loader className={cl.loader} />}
      {modalItem && <PromotionModalItem {...modalItem} />}
    </article>
  );
};

export default PromotionModalContent;
