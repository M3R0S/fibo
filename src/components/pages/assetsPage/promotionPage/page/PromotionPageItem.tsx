import React, { FC } from "react";
import cl from "../../../../../assets/styles/pages/promotionPage/page/promotionPage.module.sass";
import { useAppDispatch } from "../../../../../hook/storeHook/useStore";
import { setOpenPromotionModalItem } from "../../../../../store/slice/promotion/promotionSlice";
import { TPromotionItem } from "../../../../../store/slice/promotion/types/promotionTypes";

const PromotionPageItem: FC<TPromotionItem> = ({ id, img, title, info }) => {
  const dispatch = useAppDispatch();
  return (
    <article className={cl.promotion_card}>
      <img src={img} alt={img} />
      <div className={cl.wrapper_card}>
        <h2>{title}</h2>
        <p>{info.length > 200 ? info.substring(0, 200) + "..." : info}</p>
      </div>
      <button
        className={cl.open_modal}
        onClick={() => dispatch(setOpenPromotionModalItem(id))}
      >
        Посмотреть
      </button>
    </article>
  );
};

export default PromotionPageItem;
