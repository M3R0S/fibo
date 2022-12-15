import { FC } from "react";
import { Outlet } from "react-router-dom";

import cl from "./mainPageApp.module.scss";

import { useCloseBurgerMenu } from "hook";
import { DeliveryApp, MainProductApp, NewProductApp, PromotionApp, Slider } from "../containers";

export const MainPageApp: FC = () => {
    const { closeBurgerMenu } = useCloseBurgerMenu();

    return (
        <main onClick={closeBurgerMenu} className={cl.main}>
            <Slider />
            <NewProductApp />
            <MainProductApp />
            <PromotionApp />
            <DeliveryApp />
            <Outlet />
        </main>
    );
};
