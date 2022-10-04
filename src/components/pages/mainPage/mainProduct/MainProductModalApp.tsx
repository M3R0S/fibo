import React, { FC, useEffect } from "react";
import cl from "../../../../assets/styles/pages/mainProduct/mainProductModal.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import {
  getMainProductItem,
  setClosedModal,
} from "../../../../store/slice/mainProductItemSlice";
import Loader from "../../../ui/assets/loader/Loader";
import MainProductModalItem from "./MainProductModalItem";

const MainProductModalApp: FC = () => {
  const { openModal, idModal, typeModal, item, loading, error } =
    useAppSelector((state) => state.mainProductItem);
  useEffect(() => {
    dispatch(getMainProductItem({ typeModal, idModal }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        item.map((itemObj, index) => (
          <MainProductModalItem {...itemObj}
           key={itemObj.id}></MainProductModalItem>
        ))
      )}
    </section>
  );
};

export default MainProductModalApp;
