import { FC } from "react";

import cl from "./promotionItem.module.scss";
import { IPromotionItem } from "./constants/types";

export const PromotionItem: FC<IPromotionItem> = (props) => {
    const { img, alt } = props;

    return (
        <div className={cl.card}>
            <img src={img} alt={alt} />
        </div>
    );
};
