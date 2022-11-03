import React, { FC, useEffect } from "react";
import cl from "../../../../../assets/styles/pages/mainProduct/mainProductModal.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../hook/storeHook/useStore";
import {
  setPizzaDough,
  setPizzaWeightProduct,
  setPizzaPrice,
} from "../../../../../../store/slice/pizzaModalSlice";
import Loader from "../../../../../ui/assets/loader/Loader";
import ButtonPizzaModal from "./ButtonPizzaModal";

export interface IPizzaModal {
  info: string;
  weightProductSmall?: number;
  weightProductBig?: number;
  weightProductMedium?: number;
  priceSmall?: number;
  priceMedium?: number;
  priceBig?: number;
}

const PizzaModal: FC<IPizzaModal> = ({
  info,
  weightProductSmall,
  weightProductBig,
  weightProductMedium,
  priceSmall,
  priceMedium,
  priceBig,
}) => {
  const { pizzaDough, pizzaSize, pizzaWeightProduct } = useAppSelector(
    (state) => state.pizzaModal
  );
  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state) => state.mainProductItem);

  useEffect(() => {
    dispatch(setPizzaPrice(priceSmall));
    dispatch(setPizzaWeightProduct(weightProductSmall));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <Loader></Loader>
      ) : (
        <div className={cl.pizza_modal}>
          <h2>{`${pizzaSize} см, ${pizzaDough} тесто, ${pizzaWeightProduct} г`}</h2>
          <p>{info}</p>
          <div className={cl.pizza_size}>
            <ButtonPizzaModal
              size={25}
              price={priceSmall}
              weightProduct={weightProductSmall}
            >
              Маленькая
            </ButtonPizzaModal>
            <ButtonPizzaModal
              size={31}
              price={priceMedium}
              weightProduct={weightProductMedium}
            >
              Средняя
            </ButtonPizzaModal>
            <ButtonPizzaModal
              size={40}
              price={priceBig}
              weightProduct={weightProductBig}
            >
              Большая
            </ButtonPizzaModal>
          </div>
          <div className={cl.pizza_dough}>
            <button
              className={
                pizzaDough === "традиционное"
                  ? [cl.pizza_button_active, cl.pizza_button].join(" ")
                  : cl.pizza_button
              }
              onClick={() => {
                dispatch(setPizzaDough("традиционное"));
              }}
            >
              Традиционное
            </button>
            <button
              className={
                pizzaDough === "тонкое"
                  ? [cl.pizza_button_active, cl.pizza_button].join(" ")
                  : cl.pizza_button
              }
              onClick={() => {
                dispatch(setPizzaDough("тонкое"));
              }}
            >
              Тонкое
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PizzaModal;
