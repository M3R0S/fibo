import React, { FC, useState } from "react";
import cl from "../../../../assets/styles/pages/mainProduct/mainProductModal.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hook/storeHook/useStore";
import close from "../../../../assets/image/main-product/close.png";
import { TMainPositionItem } from "../../../../../store/slice/mainPosition/types/mainPositionTypes";
import { v4 as uuid } from "uuid";
import { postBasketItem } from "../../../../../store/slice/basketPageSlice";

const MainPositionModalItem: FC<TMainPositionItem> = ({
  title,
  info,
  id,
  img,
  price,
  type,
  weightProduct,
}) => {
  const dispatch = useAppDispatch();
  const { pizzaDough, pizzaSize, pizzaWeightProduct, pizzaPrice } =
    useAppSelector((state) => state.pizzaModal);

  function setPostBasketItem() {
    dispatch(
      postBasketItem({
        id: uuid,
        typeProduct: type,
        idProduct: id,
        title,
        info,
        img,
        quantity: 1,
        weightProduct,
        price: price,
      })
    );
  }

  return (
    <article onClick={(e) => e.stopPropagation()} className={cl.card_content}>
      <img className={cl.main_pic} src={img} alt={`Modal img: ${img}`} />
      <div className={cl.card_info}>
        <h1>{title}</h1>
        <div className={cl.product_info}>
          <p>{info + " " + weightProduct + " г."}</p>
        </div>
        <button onClick={setPostBasketItem} className={cl.add_basket}>
          Добавить в корзину | {price} ₽
        </button>
      </div>
      <button className={cl.close}>
        <img src={close} alt={close} />
      </button>
    </article>
  );
};

export default MainPositionModalItem;
