import React, { FC } from "react";
import {
  TPromotionItem,
} from "../../../../store/slice/promotionSlice";
import cl from "../../../../assets/styles/pages/promotion/promotionPage.module.sass";
import { useAppDispatch } from "../../../../hook/storeHook/useStore";
import { setOpenModal } from "../../../../store/slice/promotionItemSlice";

const PromotionPageItem: FC<TPromotionItem> = ({ id, img, h2Text, pText }) => {
  const dispatch = useAppDispatch();
  return (
    <article className={cl.promotion_card}>
      <div className={cl.card_info}>
        <img src={img} alt={img} />
        <div className={cl.wrapper_card}>
          <h2>{h2Text}</h2>
          <p>{pText}</p>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(setOpenModal(id));
        }}
        className={cl.open_modal}
      >
        Посмотреть
      </button>
    </article>
  );
};

export default PromotionPageItem;
