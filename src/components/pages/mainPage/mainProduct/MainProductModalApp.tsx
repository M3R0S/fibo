import React, { FC, useEffect, useState } from "react";
import cl from "../../../../assets/styles/pages/mainProduct/mainProduct.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import {
  getMainProductItem,
  setClosedModal,
  TMainProductItemModal,
} from "../../../../store/slice/mainProductItemSlice";
import PizzaModal from "./modalItem/PizzaModal";
import close from "../../../../assets/image/main-product/close.png";
import SupplementsList from "./supplements/SupplementsList";

const MainProductModalApp: FC = () => {
  const { openModal, idModal, typeModal, item } = useAppSelector(
    (state) => state.mainProductItem
  );
  useEffect(() => {
    dispatch(getMainProductItem({ typeModal, idModal }));
  }, [openModal]);
  let itemObj = {} as TMainProductItemModal;
  item.forEach((i) => {
    itemObj = i;
  });

  const dispatch = useAppDispatch();

  return (
    <section
      onClick={() => {
        dispatch(setClosedModal());
      }}
      className={
        openModal
          ? cl.modal_card_container_enable
          : cl.modal_card_container_disable
      }
    >
      <article onClick={(e) => e.stopPropagation()} className={cl.card_content}>
        <img
          className={cl.main_pic}
          src={itemObj.img}
          alt={`Modal img: ${itemObj.img}`}
        />
        <div className={cl.card_info}>
          <h1>{itemObj.h1Text}</h1>
          {itemObj.type === "pizza" ? (
            <PizzaModal itemObj={itemObj}></PizzaModal>
          ) : (
            <PizzaModal itemObj={itemObj}></PizzaModal>
          )}
          <SupplementsList endpoint={itemObj.type}></SupplementsList>
          <button className={cl.add_basket}>Добавить в корзину | 150₽</button>
        </div>
        <button onClick={() => dispatch(setClosedModal())} className={cl.close}>
          <img src={close} alt={close} />
        </button>
      </article>
    </section>
  );
};

export default MainProductModalApp;
