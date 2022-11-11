import { FC, memo } from "react";
import cl from "../../../../assets/styles/pages/promotionPage/promotion.module.sass";

interface IPromotionItem {
    img: string
}

const PromotionItem: FC<IPromotionItem> = ({img}) => {
  return (
    <div className={cl.promotion_card}>
      <img src={img} alt="Акция" />
    </div>
  );
};

export default memo(PromotionItem);
