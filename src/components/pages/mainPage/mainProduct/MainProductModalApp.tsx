import React, { FC, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
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
  const [targetAnimationParent, setTargetAnimationParent] =
    useState<boolean>(false);

  useEffect(() => {
    dispatch(getMainProductItem({ typeModal, idModal }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  // useEffect(() => {
  //   console.log(loading);
  // }, [loading]);

  const dispatch = useAppDispatch();

  return (
    <CSSTransition
      in={targetAnimationParent}
      timeout={400}
      exit={true}
      classNames={{
        enterActive: cl.modal_card_container_enable_enter_active,
      }}
    >
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
        {loading ? (
          <CSSTransition
            in={openModal}
            timeout={400}
            classNames={{
              enter: cl.loader_container_enter,
              enterActive: cl.loader_container_enter_active,
            }}
          >
            <div className={cl.loader_container}>
              <Loader></Loader>
            </div>
          </CSSTransition>
        ) : (
          item.map((itemObj) => (
          <MainProductModalItem
            targetAnimationParent={targetAnimationParent}
            setTargetAnimationParent={setTargetAnimationParent}
            // {...item[0]}
            {...itemObj}
            key={itemObj.id}
          ></MainProductModalItem>
          ))
        )}
      </section>
    </CSSTransition>
  );
};

export default MainProductModalApp;
