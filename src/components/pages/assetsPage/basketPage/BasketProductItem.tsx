import React, { FC, useEffect, useState } from "react";
import cl from "../../../../assets/styles/pages/basket/basketProductItem.module.sass";
import { useAppDispatch } from "../../../../hook/storeHook/useStore";
import {
  deleteBasketItem,
  TPostBasketItem,
} from "../../../../store/slice/basketPageSlice";

const BasketProductItem: FC<TPostBasketItem> = ({
  title,
  img,
  pText,
  price,
  pizzaDough,
  pizzaSize,
  pizzaWeightProduct,
  idProduct,
  typeProduct,
}) => {
  const [count, setCount] = useState<number>(1);
  const dispatch = useAppDispatch();

  function increment() {
    if (count < 100) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count === 0) {
    }
  }

  return (
    <section className={cl.container}>
      <figure className={cl.content}>
        <img src={img} alt="Продукция" />
        <div className={cl.info}>
          <h2>{title}</h2>
          <p>{`${pText} ${pizzaDough} тесто. ${pizzaWeightProduct} г.`}</p>
        </div>
        <strong className={cl.price}>{price} ₽</strong>
        <div className={cl.quantity}>
          <button onClick={decrement}>-</button>
          <p>{count}</p>
          <button onClick={increment}>+</button>
        </div>
        <button
          onClick={() => {
            dispatch(deleteBasketItem({ idProduct, typeProduct }));
          }}
          className={cl.delete}
        ></button>
      </figure>
    </section>
  );
};

export default BasketProductItem;
