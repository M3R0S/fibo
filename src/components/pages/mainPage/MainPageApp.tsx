import { FC } from "react";
import { Outlet } from "react-router-dom";

import cl from "./mainPageApp.module.scss";

import { useCloseBurgerMenu } from "hook";

import Slider from "./slider/Slider";
import NewProductList from "./newProduct/NewProductList";
import MainProductApp from "./mainProduct/page/mainProductApp/MainProductApp";
import MainProductPopupApp from "./mainProduct/popup/mainProductPopupApp/MainProductPopupApp";
import PromotionList from "./promotion/PromotionList";
import DeliveryApp from "./delivery/DeliveryApp";

export const MainPageApp: FC = () => {
    const { closeBurgerMenu } = useCloseBurgerMenu();

    return (
        <main onClick={closeBurgerMenu} className={cl.main}>
            <Slider />
            <NewProductList />
            <MainProductApp />
            <MainProductPopupApp />
            <PromotionList />
            <DeliveryApp />
            <Outlet />
        </main>
    );
};
