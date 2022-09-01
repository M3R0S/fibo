import React, { FC, useEffect } from "react";
import cl from "../../../../assets/styles/pages/promotion/promotionPage.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import { getPromotionItem, getPromotionList } from "../../../../store/slice/promotionSlice";
import PromotionModal from "./PromotionModal"
import PromotionPageItem from "./PromotionPageItem";

const PromotionPageList: FC = () => {
  const { list, itemModal, idModal, openModal} = useAppSelector(
    (state) => state.promotionPage
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPromotionList());
  }, []);

  useEffect(() => {
    dispatch(getPromotionItem(idModal));
  }, [openModal]);

  return (
    <main className={cl.main_promotion}>
      <section className={cl.container}>
        <h1>Акции</h1>
        <figure className={cl.promotion_card_cont}>
          {list.map((list) => (
            <PromotionPageItem {...list} key={list.id}></PromotionPageItem>
          ))}
        </figure>
      </section>
      {itemModal.map((card) => (
        <PromotionModal {...card} key={card.id}></PromotionModal>
      ))}
    </main>
  );
};

export default PromotionPageList;
