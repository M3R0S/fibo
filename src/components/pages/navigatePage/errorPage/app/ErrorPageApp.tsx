import { FC } from "react";
import { Outlet } from "react-router-dom";

import cl from "./errorPageApp.module.scss";

import { useLocationLinkActive } from "hook";
import { ButtonBack, ButtonNavigateMain } from "components/ui";

export const ErrorPageApp: FC = () => {
    useLocationLinkActive();

    return (
        <main className={cl.page}>
            <section className={cl.container}>
                <h1>К сожалению, страница недоступна</h1>
                <div className={cl.control}>
                    <ButtonBack className={cl.back}>Назад</ButtonBack>
                    <ButtonNavigateMain className={cl.home}>На главную</ButtonNavigateMain>
                </div>
            </section>
            <Outlet />
        </main>
    );
};
