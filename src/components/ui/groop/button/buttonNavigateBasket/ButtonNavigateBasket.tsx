import { FC } from "react";
import CountUp from "react-countup";
import classNames from "classnames";

import cl from "./buttonNavigateBasket.module.scss";
import { useNavigateBasket } from "./logic";
import { IButtonNavigateBasket } from "./constants/types";

import { useAppSelector } from "store";

export const ButtonNavigateBasket: FC<IButtonNavigateBasket> = ({ className }) => {
    const { totalPrice } = useAppSelector((state) => state.basketPage);
    const { navigateBasketPage } = useNavigateBasket();

    return (
        <button
            type="button"
            className={classNames(cl.basket_root, className)}
            onClick={navigateBasketPage}
        >
            {totalPrice ? (
                <CountUp
                    className={cl.price}
                    separator=" "
                    preserveValue={true}
                    end={totalPrice}
                    duration={0.5}
                    suffix={" ₽"}
                    prefix={"Корзина | "}
                />
            ) : (
                "Корзина"
            )}
        </button>
    );
};
