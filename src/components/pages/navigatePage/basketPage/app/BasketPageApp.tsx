import { FC } from "react";
import { Outlet } from "react-router-dom";

import cl from "./basketPageApp.module.scss";

import { BasketPageHeader, BasketPageInfo, BasketPageList } from "../container";

export const BasketPageApp: FC = () => {
    return (
        <main className={cl.basket}>
            <section className={cl.container}>
                <BasketPageHeader />
                <BasketPageList />
                <BasketPageInfo />
            </section>
            <Outlet />
        </main>
    );
};
