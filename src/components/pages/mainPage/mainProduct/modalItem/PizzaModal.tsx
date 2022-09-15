import React, { FC, useEffect, useState } from "react";
import cl from "../../../../../assets/styles/pages/mainProduct/mainProduct.module.sass";
import { useAppSelector } from "../../../../../hook/storeHook/useStore";
import { TMainProductItemModal } from "../../../../../store/slice/mainProductItemSlice";
import Loader from "../../../../ui/loader/Loader";

interface IPizzaModal {
  weightProductSmall: number | undefined;
  weightProductBig: number | undefined;
  weightProductMedium: number | undefined;
}

export type TDoughInfo = "традиционное" | "тонкое";
export type TPizzaSizeInfo = 25 | 31 | 40;
export type TWeightProductInfo = "small" | "medium" | "big";

const PizzaModal: FC<IPizzaModal> = ({
  weightProductSmall,
  weightProductBig,
  weightProductMedium,
}) => {
  const [pizzaSize, setPizzaSize] = useState<TPizzaSizeInfo>(25);
  const [pizzaDough, setPizzaDough] = useState<TDoughInfo>("традиционное");
  const [weightProduct, setWeightProduct] =
    useState<TWeightProductInfo>("small");
  const { loading, error } = useAppSelector((state) => state.mainProductItem);

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <Loader></Loader>
      ) : (
        <>
          <h2>{`${pizzaSize} см, ${pizzaDough} тесто, ${
            weightProduct === "small"
              ? weightProductSmall
              : weightProduct === "medium"
              ? weightProductMedium
              : weightProduct === "big"
              ? weightProductBig
              : ""
          } г`}</h2>
          <div className={cl.pizza_size}>
            <button
              className={
                pizzaSize === 25 ? cl.pizza_button_active : cl.pizza_button
              }
              onClick={() => {
                setPizzaSize(25);
                setWeightProduct("small");
              }}
            >
              Маленькая
            </button>
            <button
              className={
                pizzaSize === 31 ? cl.pizza_button_active : cl.pizza_button
              }
              onClick={() => {
                setPizzaSize(31);
                setWeightProduct("medium");
              }}
            >
              Средняя
            </button>
            <button
              className={
                pizzaSize === 40 ? cl.pizza_button_active : cl.pizza_button
              }
              onClick={() => {
                setPizzaSize(40);
                setWeightProduct("big");
              }}
            >
              Большая
            </button>
          </div>
          <div className={cl.pizza_dough}>
            <button
              className={
                pizzaDough === "традиционное"
                  ? cl.pizza_button_active
                  : cl.pizza_button
              }
              onClick={() => {
                setPizzaDough("традиционное");
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
                setPizzaDough("тонкое");
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
