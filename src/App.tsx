import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavbarApp } from "components/navbar/NavbarApp";
import { FooterApp } from "components/footer/FooterApp";
import AppRouter from "routes/AppRouter";

export const App: FC = () => {
    return (
        <BrowserRouter>
            <NavbarApp />
            <AppRouter />
            <FooterApp />
        </BrowserRouter>
    );
};
