import { FC } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

import cl from "./basketPageInfo.module.scss";

import { useAppSelector } from "store";
import { BasketPagePromoCode } from "./content";

export const BasketPageInfo: FC = () => {
    const { totalPrice } = useAppSelector((state) => state.basketPage);

    const linkMain = "/main";

    return (
        <section className={cl.container}>
            <h3>Промокод</h3>
            <div className={cl.info}>
                <BasketPagePromoCode />
                <strong className={cl.summary}>
                    {"Сумма заказа:"}
                    <CountUp
                        separator=" "
                        preserveValue={true}
                        end={totalPrice}
                        duration={0.5}
                        prefix={" "}
                        suffix={" ₽"}
                    />
                </strong>
            </div>
            <div className={cl.navigation}>
                <Link to={linkMain} className={cl.back}>
                    На главную
                </Link>
                <button className={cl.place_order}>Оформить заказ</button>
            </div>
        </section>
    );
};
