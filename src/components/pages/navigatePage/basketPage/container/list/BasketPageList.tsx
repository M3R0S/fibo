import { FC } from "react";

import cl from "./basketPageList.module.scss";

import { useAppSelector } from "store";

import { ButtonNavigateMain } from "components/ui";
import { BasketPageItem } from "./content";

export const BasketPageList: FC = () => {
    const { list } = useAppSelector((state) => state.basketPage);

    return (
        <section className={cl.list}>
            {list.length > 0 ? (
                list.map((obj) => <BasketPageItem {...obj} key={obj.id} />)
            ) : (
                <div className={cl.basket_void}>
                    <h2>Корзина пуста.</h2>
                    <ButtonNavigateMain className={cl.button_home}>
                        Желаете добавить?
                    </ButtonNavigateMain>
                </div>
            )}
        </section>
    );
};
