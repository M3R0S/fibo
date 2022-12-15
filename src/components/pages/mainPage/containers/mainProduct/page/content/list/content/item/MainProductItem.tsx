import { FC, MouseEvent } from "react";

import cl from "./mainProductItem.module.scss";
import { IMainProductItem } from "store/slice/constants/types";

import { useOpenPopup } from "hook";

import { ButtonAddInBasket } from "components/ui";

export const MainProductItem: FC<IMainProductItem> = (props) => {
    const { id, title, info, price, img, type, weight } = props;

    const { onOpenPopup } = useOpenPopup({ type, id });

    const openPopupInButton = (e: MouseEvent) => {
        e.stopPropagation();
        onOpenPopup();
    };

    const isTypePizza = type === "pizza";

    return (
        <article onClick={onOpenPopup} className={cl.card}>
            <header className={cl.header}>
                <img src={img} alt="Изображение продукта" />
                <div className={cl.title}>
                    <h2>{title}</h2>
                </div>
                <p>
                    {info.length > 150 ? info.substring(0, 150) + "..." : info}{" "}
                    {!isTypePizza ? weight + "г." : ""}
                </p>
            </header>
            <footer className={cl.footer}>
                <strong>
                    {isTypePizza && "От "}
                    {`${price} ₽`}
                </strong>
                {isTypePizza ? (
                    <button className={cl.basket} onClick={openPopupInButton}>
                        Открыть
                    </button>
                ) : (
                    <ButtonAddInBasket className={cl.basket} isPopup={false} {...props} />
                )}
            </footer>
        </article>
    );
};
