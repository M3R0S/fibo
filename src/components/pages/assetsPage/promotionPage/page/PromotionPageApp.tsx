import React, { FC } from "react";
import cl from "../../../../../assets/styles/pages/promotionPage/page/promotionPage.module.sass";
import PromotionModal from "../modal/PromotionModalApp";
import PromotionPageList from "./PromotionPageList";

const PromotionPageApp: FC = () => {
  return (
    <main className={cl.main_promotion}>
      <PromotionPageList></PromotionPageList>
      <PromotionModal></PromotionModal>
    </main>
  );
};

export default PromotionPageApp;
