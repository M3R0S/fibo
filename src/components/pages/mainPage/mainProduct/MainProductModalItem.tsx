import React, { FC, useState } from "react";
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
import { CSSTransition } from "react-transition-group";

interface IMainProductModalItem {
  targetAnimationParent: boolean;
  setTargetAnimationParent: Function;
}

const MainProductModalItem: FC<
  TMainProductItemModal & IMainProductModalItem
> = ({
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
  targetAnimationParent,
  setTargetAnimationParent,
}) => {
  const dispatch = useAppDispatch();
  const { pizzaDough, pizzaSize, pizzaWeightProduct, pizzaPrice } =
    useAppSelector((state) => state.pizzaModal);
  // const [targetAnimation, setTargetAnimation] = useState<boolean>(false);

  function setPostBasketItem() {
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
        price: type === "pizza" ? pizzaPrice : price,
        pizzaDough,
        pizzaSize,
        pizzaWeightProduct,
      })
    );
    setTargetAnimationParent(!targetAnimationParent);
  }

  return (
    <CSSTransition
      in={targetAnimationParent}
      timeout={400}
      classNames={{
        enterActive: cl.card_content_enter_active,
        exitActive: cl.card_content_exit_active,
      }}
      onEntered={() => dispatch(setClosedModal())}
      onExited={() => dispatch(setClosedModal())}
    >
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
          {/* // todo <SupplementsList endpoint={type}></SupplementsList> */}
          {type === "pizza" ? (
            <button onClick={setPostBasketItem} className={cl.add_basket}>
              Добавить в корзину | {pizzaPrice} ₽
            </button>
          ) : (
            <button onClick={setPostBasketItem} className={cl.add_basket}>
              Добавить в корзину | {price} ₽
            </button>
          )}
        </div>
        <button
          onClick={() => {
            setTargetAnimationParent(!targetAnimationParent);
          }}
          className={cl.close}
        >
          <img src={close} alt={close} />
        </button>
      </article>
    </CSSTransition>
  );
};

export default MainProductModalItem;
