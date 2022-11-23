import { FC, memo } from "react";
import cl from "./promotionItem.module.sass";
import { IPromotionItem } from "./types";

const PromotionItem: FC<IPromotionItem> = ({img}) => {
  return (
    <div className={cl.card}>
      <img src={img} alt="Акция" />
    </div>
  );
};

export default memo(PromotionItem);
