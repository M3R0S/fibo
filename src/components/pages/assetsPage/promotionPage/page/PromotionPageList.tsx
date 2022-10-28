import React, { FC } from "react";
import cl from "../../../../../assets/styles/pages/promotionPage/page/promotionPage.module.sass";
import promotionApi from "../../../../../store/slice/promotion/promotionApi";
import Loader from "../../../../ui/assets/loader/Loader";
import PromotionPageItem from "./PromotionPageItem";

const PromotionPageList: FC = () => {
  const {
    data: list,
    isLoading,
    error,
  } = promotionApi.useGetPromotionPageListQuery("");

  return (
    <section className={cl.container}>
      <h1>{error && !list ? "Ошибка загрузки акций" : "Акции"}</h1>
      {isLoading && <Loader className={cl.loader}></Loader>}
      <div className={cl.promotion_card_cont}>
        {list &&
          list.map((card) => (
            <PromotionPageItem {...card} key={card.id}></PromotionPageItem>
          ))}
      </div>
    </section>
  );
};

export default PromotionPageList;
