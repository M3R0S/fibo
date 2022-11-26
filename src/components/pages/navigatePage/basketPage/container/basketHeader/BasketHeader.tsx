import { FC } from "react";
import cl from "./basketHeader.module.sass";
import useBasketClear from "./useBasketClear";

const BasketHeader: FC = () => {
  const { onClearBasket } = useBasketClear();
  
  return (
    <header className={cl.title}>
      <h1>Корзина</h1>
      <button className={cl.clear_basket} onClick={onClearBasket}>
        Очистить корзину
      </button>
    </header>
  );
};

export default BasketHeader;
