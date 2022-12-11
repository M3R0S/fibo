import { FC } from "react";
import cl from "./mainProductItem.module.scss";
import { IMainProductList } from "store";
import useMainProductItem from "./useMainProductItem";

const MainProductItem: FC<IMainProductList> = (props) => {
    const { basketAddInfo, buttonClickHandler, isBasketAdd, onOpenPopup } =
        useMainProductItem(props);

    const { title, info, price, img, type, weight } = props;

    return (
        <article onClick={onOpenPopup} className={cl.card}>
            <header className={cl.header}>
                <img src={img} alt="Изображение продукта" />
                <div className={cl.title}>
                    <h2>{title}</h2>
                </div>
                <p>
                    {info.length > 150 ? info.substring(0, 150) + "..." : info}{" "}
                    {type !== "pizza" ? weight + "г." : ""}
                </p>
            </header>
            <footer className={cl.footer}>
                <strong>{type === "pizza" ? `от ${price} ₽` : `${price} ₽`}</strong>
                <button
                    onClick={buttonClickHandler}
                    className={isBasketAdd ? [cl.basket_disabled, cl.basket].join(" ") : cl.basket}
                >
                    {type === "pizza" ? "Открыть" : basketAddInfo}
                </button>
            </footer>
        </article>
    );
};

export default MainProductItem;
