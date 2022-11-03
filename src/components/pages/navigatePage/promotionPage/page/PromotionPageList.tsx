import React, { FC, memo } from "react";
import cl from "../../../../../assets/styles/pages/promotionPage/page/promotionPage.module.sass";
import { useGetPromotionPageListQuery } from "../../../../../store/slice/promotion/promotionApi";
import Loader from "../../../../ui/assets/loader/Loader";
import PromotionPageItem from "./PromotionPageItem";

const PromotionPageList: FC = () => {
  const {
    data: list = [],
    isLoading,
    isError,
  } = useGetPromotionPageListQuery(null);

  return (
    <section className={cl.content}>
      <h1>{isError ? "Ошибка загрузки акций" : "Акции"}</h1>
      {isLoading && <Loader className={cl.loader} />}
      {list && (
        <div className={cl.card_container}>
          {list.map((card) => (
            <PromotionPageItem {...card} key={card.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default memo(PromotionPageList);
