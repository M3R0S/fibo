import { FC } from "react";

import cl from "./newProductItem.module.scss";
import { useNewProductItem } from "./logic/useNewProductItem";
import { INewProductItem } from "store/slice/constants/types";

export const NewProductItem: FC<INewProductItem> = (props) => {
    const { title, img, price, type, id } = props;

    const { openProduct } = useNewProductItem({ id, type });

    const isTypedPizza = type === "pizza";

    return (
        <article onClick={openProduct} className={cl.card}>
            <img src={img} alt="Новая продукция" />
            <div className={cl.info}>
                <h2>{title}</h2>
                <strong>
                    {isTypedPizza && "От "}
                    {`${price} ₽`}
                </strong>
            </div>
        </article>
    );
};
