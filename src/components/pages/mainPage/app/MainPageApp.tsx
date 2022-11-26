import { FC } from "react";
import cl from "./mainPageApp.module.sass";
import DeliveryApp from "../container/delivery/deliveryApp/DeliveryApp";
import PromotionList from "../container/promotion/PromotionList";
import MainProductApp from "../container/mainProduct/page/mainProductApp/MainProductApp";
import MainProductPopupApp from "../container/mainProduct/popup/mainProductPopupApp/MainProductPopupApp";
import NewProductList from "../container/newProduct/NewProductList";
import { IMainPageApp } from "./types";
import useMainPageApp from "./useMainPageApp";
import Slider from "../container/slider/Slider";
import { Outlet } from "react-router-dom";

const MainPageApp: FC<IMainPageApp> = ({ isOpenPopup = false }) => {
  const { onCloseNavbarBurger } = useMainPageApp();

  return (
    <main onClick={onCloseNavbarBurger} className={cl.main}>
      <Slider />
      <NewProductList />
      <MainProductApp />
      <MainProductPopupApp isOpened={isOpenPopup} />
      <PromotionList />
      <DeliveryApp />
      <Outlet />
    </main>
  );
};

export default MainPageApp;
