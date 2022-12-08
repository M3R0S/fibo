import { FC } from "react";
import cl from "./promotionPageApp.module.scss";
import PromotionPageList from "../container/PromotionPageList";
import { useLocationLinkActive } from "hook";
import { Outlet } from "react-router-dom";

const PromotionPageApp: FC = () => {
    useLocationLinkActive();

    return (
        <main className={cl.page}>
            <PromotionPageList />
            <Outlet />
        </main>
    );
};

export default PromotionPageApp;
