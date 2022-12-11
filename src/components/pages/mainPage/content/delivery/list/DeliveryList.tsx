import { FC } from "react";

import cl from "./deliveryList.module.scss";
import { DELIVERY_CARD_INFO } from "../constants/const";

import { DeliveryItem } from "./item/DeliveryItem";

export const DeliveryList: FC = () => {
    return (
        <figure className={cl.cards}>
            {DELIVERY_CARD_INFO.map((item) => (
                <DeliveryItem {...item} key={item.id} />
            ))}
        </figure>
    );
};
