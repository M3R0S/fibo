import { FC } from "react";
import { Outlet } from "react-router-dom";

import cl from "./promotionPageApp.module.scss";

import { useLocationLinkActive } from "hook";

import { PromotionPageList } from "../container";

export const PromotionPageApp: FC = () => {
    useLocationLinkActive();

    return (
        <main className={cl.page}>
            <PromotionPageList />
            <Outlet />
        </main>
    );
};
