import React, { FC } from "react";
import { Link } from "react-router-dom";
import cl from "../../../../assets/styles/pages/basket/basketPage.module.sass";
import {
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import BasketProductItem from "./BasketProductItem";
import { v4 as uuidv4 } from "uuid";

const BasketPageList: FC = () => {
  const { list, totalPrice } = useAppSelector((state) => state.basketPage);

  return (
    <main className={cl.basket}>
      <section className={cl.container}>
        <h1>Корзина</h1>
        {list.map((obj) => (
          <BasketProductItem {...obj} key={uuidv4()}></BasketProductItem>
        ))}
        <div className={cl.footer}>
          <h3>Промокод</h3>
          <div className={cl.footer_content}>
            <div className={cl.promo_code}>
              <input
                type="text"
                placeholder="Введите промокод"
                className={cl.promo_check}
              />
              <button className={cl.promo_enter}>Применить</button>
            </div>
            <strong className={cl.summary}>
              Сумма заказа:
              <span>{totalPrice} ₽</span>
            </strong>
          </div>
          <div className={cl.footer_navigation}>
            <Link to={"/main"} className={cl.back}>
              Вернуться в магазин
            </Link>
            <button className={cl.place_order}>Оформить заказ</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BasketPageList;
