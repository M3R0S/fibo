import React, { FC, useEffect } from "react";
import cl from "../../../../assets/styles/pages/promotion/promotionPage.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import {
  getPromotionItem,
  setClosedModal,
  TPromotionItem,
} from "../../../../store/slice/promotionSlice";

const PromotionModal: FC<TPromotionItem> = ({ id, h2Text, img, pText }) => {
  const { openModal } = useAppSelector((state) => state.promotionPage);
  const dispatch = useAppDispatch();

  return (
    <section
      className={openModal ? cl.modal_card_cont : cl.modal_card_disable}
      onClick={(e) =>{
         dispatch(setClosedModal())
      }}
    >
      <article className={cl.modal_card}>
        <img src={img} alt={img} />
        <div className={cl.wrapper_card_modal}>
          <h2>{h2Text}</h2>
          <p>{pText}</p>
          <button
            onClick={() => dispatch(setClosedModal())}
            className={cl.closed_modal}
          >
            Закрыть
          </button>
        </div>
      </article>
    </section>
  );
};

export default PromotionModal;
