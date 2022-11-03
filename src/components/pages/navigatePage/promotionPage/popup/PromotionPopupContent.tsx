import React, { FC } from "react";
import cl from "../../../../../assets/styles/pages/promotionPage/popup/promotionPopup.module.sass";
import { TPromotionContent } from "../../../../../store/slice/promotion/types/promotionTypes";

interface IPromotionPopupContent {
  onClose: () => void;
}

const PromotionPopupContent: FC<TPromotionContent & IPromotionPopupContent> = ({
  img,
  title,
  info,
  onClose,
}) => {
  return (
    <div className={cl.card}>
      <img className={cl.header_img} src={img} alt="Изображение акции" />
      <div className={cl.card_content}>
        <h2>{title}</h2>
        <p>{info}</p>
        <button className={cl.closed} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default PromotionPopupContent;