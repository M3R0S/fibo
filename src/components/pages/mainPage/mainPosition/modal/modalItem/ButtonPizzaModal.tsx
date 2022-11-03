import React, { FC } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../hook/storeHook/useStore";
import {
  setPizzaPrice,
  setPizzaSize,
  setPizzaWeightProduct,
} from "../../../../../../store/slice/pizzaModalSlice";
import cl from "../../../../../assets/styles/pages/mainProduct/mainProductModal.module.sass";

interface IButtonPizzaModal {
  weightProduct?: number;
  price?: number;
  size?: number;
  children: string;
  active?: boolean;
}

const ButtonPizzaModal: FC<IButtonPizzaModal> = ({
  size,
  price,
  weightProduct,
  children,
}) => {
  const dispatch = useAppDispatch();
  const { pizzaSize } = useAppSelector(
    (state) => state.pizzaModal
  );
  return (
    <button
      onClick={() => {
        dispatch(setPizzaSize(size));
        dispatch(setPizzaWeightProduct(weightProduct));
        dispatch(setPizzaPrice(price));
      }}
      className={size === pizzaSize ? [cl.pizza_button_active, cl.pizza_button].join(' ') : cl.pizza_button}
    >
      {children}
    </button>
  );
};

export default ButtonPizzaModal;
