import { FC } from "react";
import cl from "./basketPageApp.module.sass";
import BasketPageList from "../container/basketPageList/BasketPageList";
import BasketPageInfo from "../container/basketPageInfo/BasketPageInfo";
import useBasketPageApp from "./useBasketPageApp";

const BasketPageApp: FC = () => {
  const {onClearBasket} = useBasketPageApp()

  return (
    <main className={cl.basket}>
      <section className={cl.container}>
        <header className={cl.title}>
          <h1>Корзина</h1>
          <button className={cl.clear_basket} onClick={onClearBasket}>Очистить корзину</button>
        </header>
        <BasketPageList />
        <BasketPageInfo />
      </section>
    </main>
  );
};

export default BasketPageApp;
