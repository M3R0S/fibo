import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { FooterApp, NavbarApp } from "components";
import { AppRouter } from "routes";

export const App: FC = () => {
    return (
        <BrowserRouter>
            <NavbarApp />
            <AppRouter />
            <FooterApp />
        </BrowserRouter>
    );
};
