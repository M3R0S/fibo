import React, { FC } from "react";
import { useAppDispatch } from "../../../../../hook/storeHook/useStore";
import { setClosedPromotionModalItem } from "../../../../../store/slice/promotion/promotionSlice";
import { TPromotionItem } from "../../../../../store/slice/promotion/types/promotionTypes";
import cl from "../../../../../assets/styles/pages/promotionPage/modal/promotionModal.module.sass";

const PromotionModalItem: FC<TPromotionItem> = ({ img, title, info }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={cl.modal_item}>
      <img className={cl.img_modal} src={img} alt="Изображение акции" />
      <div className={cl.modal_wrapper_card}>
        <h2>{title}</h2>
        <p>{info}</p>
        <button
          onClick={() => dispatch(setClosedPromotionModalItem())}
          className={cl.closed_modal}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default PromotionModalItem;
