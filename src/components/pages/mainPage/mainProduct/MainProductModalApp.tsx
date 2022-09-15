import React, { FC, useEffect } from "react";
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
import Loader from "../../../ui/loader/Loader";
import MainProductModalItem from "./MainProductModalItem";

const MainProductModalApp: FC = () => {
  const { openModal, idModal, typeModal, item, loading, error } =
    useAppSelector((state) => state.mainProductItem);
  useEffect(() => {
    dispatch(getMainProductItem({ typeModal, idModal }));
  }, [openModal]);

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
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <div className={cl.loader_container}>
          <Loader></Loader>
        </div>
      ) : (
        item.map((itemObj) => (
          <MainProductModalItem {...itemObj} key={itemObj.id}></MainProductModalItem>
        ))
      )}
    </section>
  );
};

export default MainProductModalApp;
