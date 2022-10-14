import React, { FC, useEffect } from "react";
import cl from "../../../../assets/styles/pages/promotion/promotionPage.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import { getPromotionItem, setClosedModal } from "../../../../store/slice/promotionItemSlice";
import Loader from "../../../ui/assets/loader/Loader";
import PromotionItemModal from "./PromotionItemModal";

const PromotionModal: FC = () => {
  const { openModal, error, loading, item, idModal } = useAppSelector(
    (state) => state.promotionPageItem
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPromotionItem(idModal));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  return (
      <section
        className={openModal ? cl.modal_card_cont : cl.modal_card_disable}
        onClick={(e) => {
          dispatch(setClosedModal());
        }}
      >
        {error ? (
          <h1>{error}</h1>
        ) : loading && openModal ? (
          <div className={cl.loader_container}>
            <Loader></Loader>
          </div>
        ) : openModal ? (
          item.map((obj) => (
            <PromotionItemModal {...obj} key={obj.id}></PromotionItemModal>
          ))
        ) : null}
      </section>
  );
};

export default PromotionModal;
