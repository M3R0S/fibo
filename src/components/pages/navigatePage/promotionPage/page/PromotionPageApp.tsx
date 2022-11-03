import React, { FC } from "react";
import cl from "../../../../../assets/styles/pages/promotionPage/page/promotionPage.module.sass";
import PromotionPopupApp from "../popup/PromotionPopupApp";
import PromotionPageList from "./PromotionPageList";

interface IPromotionPageApp {
  isOpenPopup: boolean;
}

const PromotionPageApp: FC<IPromotionPageApp> = ({ isOpenPopup}) => {

  return (
    <main className={cl.container}>
      <PromotionPageList />
      <PromotionPopupApp isOpenPopup={isOpenPopup} />
    </main>
  );
};

export default PromotionPageApp;
