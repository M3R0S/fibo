import React, { FC, useEffect } from "react";
import cl from "../../../../assets/styles/pages/promotion/promotionPage.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import { getPromotionItem } from "../../../../store/slice/promotionItemSlice";
import { getPromotionList } from "../../../../store/slice/promotionSlice";
import Loader from "../../../ui/loader/Loader";
import PromotionModal from "./PromotionModal";
import PromotionPageItem from "./PromotionPageItem";

const PromotionPageList: FC = () => {
  const { list, error, loading } = useAppSelector(
    (state) => state.promotionPage
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPromotionList());
  }, []);

  return (
    <main className={cl.main_promotion}>
      <section className={cl.container}>
        <h1>Акции</h1>
        {error ? (
          <h1>{error}</h1>
        ) : loading ? (
          <div className={cl.loader_container}>
            <Loader marginTop={200}></Loader>
          </div>
        ) : (
          <figure className={cl.promotion_card_cont}>
            {list.map((list) => (
              <PromotionPageItem {...list} key={list.id}></PromotionPageItem>
            ))}
          </figure>
        )}
      </section>
      <PromotionModal></PromotionModal>
    </main>
  );
};

export default PromotionPageList;
