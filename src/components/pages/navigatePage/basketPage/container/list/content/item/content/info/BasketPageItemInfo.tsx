import { FC } from "react";

import cl from "./basketPageItemInfo.module.scss";
import { IBasketPageItemInfo } from "./constants/types";
import { useExactlyInfo } from "./logic";

export const BasketPageItemInfo: FC<IBasketPageItemInfo> = (props) => {
    const { dough, info, size, typeProduct, weight, title, img } = props;

    const { exactlyInfo, onSetExactlyInfo, showExactlyInfo } = useExactlyInfo({
        info,
    });

    const isTypePizza = typeProduct === "pizza";
    const pizzaFooterInfo = `${dough} тесто. ${size} см. ${weight} г.`;
    const defaultFooterInfo = `${weight} г.`;

    return (
        <div className={cl.container}>
            <img src={img} alt="Продукция" />
            <div className={cl.info}>
                <h2>{title}</h2>
                <p>{exactlyInfo}</p>
                <span onClick={onSetExactlyInfo}>{showExactlyInfo}</span>
                <p>{isTypePizza ? pizzaFooterInfo : defaultFooterInfo}</p>
            </div>
        </div>
    );
};
