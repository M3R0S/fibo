import { FC } from "react";

import cl from "./deliveryItem.module.scss";

import { IDeliveryItem } from "../../constants/types";

export const DeliveryItem: FC<IDeliveryItem> = ({ img, info }) => {
    return (
        <article className={cl.card}>
            <div className={cl.rectangle_icon}>
                <img src={img} alt="Визуализация действия" />
            </div>
            <div className={cl.info}>
                <h2>{info}</h2>
            </div>
        </article>
    );
};
