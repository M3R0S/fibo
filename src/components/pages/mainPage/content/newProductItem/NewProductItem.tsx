import { FC, memo } from "react";
import cl from "./newProductItem.module.sass";
import { INewProductItem } from "store/slice/newProduct/types";
import useNewProductItem from "./useNewProductItem";

const NewProductItem: FC<INewProductItem> = ({ title, img, price, type, id }) => {
  const { openProduct } = useNewProductItem({ id, type });

  return (
    <article onClick={openProduct} className={cl.card}>
      <img src={img} alt="Новая продукция" />
      <div className={cl.info}>
        <h2>{title}</h2>
        <strong>{type === "pizza" ? `От ${price} ₽` : `${price} ₽`}</strong>
      </div>
    </article>
  );
};

export default memo(NewProductItem);
