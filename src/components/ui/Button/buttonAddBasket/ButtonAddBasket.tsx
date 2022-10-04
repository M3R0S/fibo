import React, { FC } from "react";
import { useAppDispatch } from "../../../../hook/storeHook/useStore";
import { postBasketItem } from "../../../../store/slice/basketPageSlice";
import {
  SectionName,
  TMainProductItemModal,
} from "../../../../store/slice/mainProductItemSlice";
import cl from './buttonAddBasket.module.sass'

interface ITMainProductItemModal {
  pizzaDough?: number;
  pizzaSize?: number;
  pizzaWeightProduct?: number;
  pizzaPrice?: number;
}

const ButtonAddBasket: FC<TMainProductItemModal & ITMainProductItemModal> = ({
  id,
  img,
  info,
  price,
  title,
  type,
  pizzaDough,
  pizzaPrice,
  pizzaSize,
  pizzaWeightProduct,
}) => {
    const dispatch = useAppDispatch()
  return (
    <button
      onClick={() => {
        dispatch(
          postBasketItem({
            typeProduct: type,
            idProduct: id,
            title,
            info,
            img,
            pizzaDough,
            pizzaSize,
            pizzaWeightProduct,
            price: pizzaPrice,
          })
        );
      }}
      className={cl.add_basket_root}
    >
      Добавить в корзину | {pizzaPrice} ₽
    </button>
  );
};

export default ButtonAddBasket;
