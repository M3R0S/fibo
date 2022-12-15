import { FC } from "react";
import CountUp from "react-countup";
import classNames from "classnames";

import cl from "./buttonAddInBasket.module.scss";
import { useAddInBasket } from "./logic";
import { IButtonAddInBasket } from "./constants/types";

export const ButtonAddInBasket: FC<IButtonAddInBasket> = (props) => {
    const { price, className, isPopup } = props;

    const { isProductAdd, setPostBasketItem } = useAddInBasket(props);

    if (isPopup) {
        return (
            <button
                onClick={setPostBasketItem}
                className={classNames(cl.add_basket_root, className)}
            >
                {isProductAdd ? (
                    "Товар успешно добавлен!"
                ) : (
                    <CountUp
                        end={Number(price)}
                        separator=" "
                        duration={0.5}
                        preserveValue
                        prefix="Добавить в корзину | "
                        suffix=" ₽"
                    />
                )}
            </button>
        );
    } else
        return (
            <button
                onClick={setPostBasketItem}
                className={classNames(cl.add_basket_root, className)}
            >
                {isProductAdd ? "Добавлено" : "В корзину"}
            </button>
        );
};
