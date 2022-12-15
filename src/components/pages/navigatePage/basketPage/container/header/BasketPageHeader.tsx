import { FC } from "react";

import cl from "./basketPageHeader.module.scss";
import { useBasketClear } from "./logic";

export const BasketPageHeader: FC = () => {
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
