import React, { FC, useEffect, useState } from "react";
import cl from "../../../../../assets/styles/pages/mainProduct/mainProduct.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hook/storeHook/useStore";
import { TMainProductItemModal } from "../../../../../store/slice/mainProductItemSlice";
import {
  setPizzaDough,
  setPizzaSize,
  setPizzaWeightProduct,
  setPizzaPrice,
} from "../../../../../store/slice/pizzaModalSlice";
import Loader from "../../../../ui/assets/loader/Loader";
import ButtonPizzaModal from "./ButtonPizzaModal";

export interface IPizzaModal {
  weightProductSmall?: number;
  weightProductBig?: number;
  weightProductMedium?: number;
  priceSmall?: number;
  priceMedium?: number;
  priceBig?: number;
}

const PizzaModal: FC<IPizzaModal> = ({
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

  const buttonSizeArray = [];

  useEffect(() => {
    dispatch(setPizzaPrice(priceSmall));
    dispatch(setPizzaWeightProduct(weightProductSmall));
  }, []);

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <Loader></Loader>
      ) : (
        <>
          <h2>{`${pizzaSize} см, ${pizzaDough} тесто, ${pizzaWeightProduct} г`}</h2>
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
            {/* <button
              className={
                pizzaSize === 25 ? cl.pizza_button_active : cl.pizza_button
              }
              onClick={() => {
                dispatch(setPizzaSize(25));
                dispatch(setPizzaWeightProduct(weightProductSmall));
                dispatch(setPizzaPrice(priceSmall));
              }}
            >
              Маленькая
            </button>
            <button
              className={
                pizzaSize === 31 ? cl.pizza_button_active : cl.pizza_button
              }
              onClick={() => {
                dispatch(setPizzaSize(31));
                dispatch(setPizzaWeightProduct(weightProductMedium));
                dispatch(setPizzaPrice(priceMedium));
              }}
            >
              Средняя
            </button>
            <button
              className={
                pizzaSize === 40 ? cl.pizza_button_active : cl.pizza_button
              }
              onClick={() => {
                dispatch(setPizzaSize(40));
                dispatch(setPizzaWeightProduct(weightProductBig));
                dispatch(setPizzaPrice(priceBig));
              }}
            >
              Большая
            </button> */}
          </div>
          <div className={cl.pizza_dough}>
            <button
              className={
                pizzaDough === "традиционное"
                  ? cl.pizza_button_active
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
                  ? cl.pizza_button_active
                  : cl.pizza_button
              }
              onClick={() => {
                dispatch(setPizzaDough("тонкое"));
              }}
            >
              Тонкое
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PizzaModal;
