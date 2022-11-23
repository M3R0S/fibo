import { FC } from "react";
import cl from "./promotionPageApp.module.sass";
import PromotionPopupApp from "../../popup/app/PromotionPopupApp";
import PromotionPageList from "../container/PromotionPageList";
import { IPromotionPageApp } from "./types";

const PromotionPageApp: FC<IPromotionPageApp> = ({ isOpenPopup = false }) => {
  return (
    <main className={cl.page}>
      <PromotionPageList />
      <PromotionPopupApp isOpenPopup={isOpenPopup} />
    </main>
  );
};

export default PromotionPageApp;
