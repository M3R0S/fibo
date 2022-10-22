import React, { FC } from "react";
import {
  setClosedModal,
  TMainProductItemModal,
} from "../../../../store/slice/mainProductItemSlice";
import cl from "../../../../assets/styles/pages/mainProduct/mainProductModal.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import close from "../../../../assets/image/main-product/close.png";

// import SupplementsList from "./supplements/SupplementsList";
import { postBasketItem } from "../../../../store/slice/basketPageSlice";
import PizzaModal from "./modalItem/PizzaModal";
import { v4 as uuid } from "uuid";

const MainProductModalItem: FC<TMainProductItemModal> = ({
  title,
  info,
  id,
  img,
  price,
  priceSmall,
  priceMedium,
  priceBig,
  type,
  weightProduct,
  weightProductBig,
  weightProductMedium,
  weightProductSmall,
}) => {
  const dispatch = useAppDispatch();
  const { pizzaDough, pizzaSize, pizzaWeightProduct, pizzaPrice } =
    useAppSelector((state) => state.pizzaModal);
  return (
    <article onClick={(e) => e.stopPropagation()} className={cl.card_content}>
      <img className={cl.main_pic} src={img} alt={`Modal img: ${img}`} />
      <div className={cl.card_info}>
        <h1>{title}</h1>
        {type === "pizza" ? (
          <PizzaModal
            weightProductBig={weightProductBig}
            weightProductMedium={weightProductMedium}
            weightProductSmall={weightProductSmall}
            priceBig={priceBig}
            priceMedium={priceMedium}
            priceSmall={priceSmall}
            info={info}
          ></PizzaModal>
        ) : (
          <div className={cl.product_info}>
            <p>{info + " " + weightProduct + " г."}</p>
          </div>
        )}
        {/* <SupplementsList endpoint={type}></SupplementsList> */}
        {type === "pizza" ? (
          <button
            onClick={() => {
              dispatch(
                postBasketItem({
                  id: uuid(),
                  typeProduct: type,
                  idProduct: id,
                  title,
                  info,
                  img,
                  quantity: 1,
                  pizzaDough,
                  pizzaSize,
                  pizzaWeightProduct,
                  price: pizzaPrice,
                })
              );
            }}
            className={cl.add_basket}
          >
            Добавить в корзину | {pizzaPrice} ₽
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(
                postBasketItem({
                  id: uuid(),
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
            }}
            className={cl.add_basket}
          >
            Добавить в корзину | {price} ₽
          </button>
        )}
      </div>
      <button onClick={() => dispatch(setClosedModal())} className={cl.close}>
        <img src={close} alt={close} />
      </button>
    </article>
  );
};

export default MainProductModalItem;
