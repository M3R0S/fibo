import { FC } from "react";

import cl from "./navbarMenu.module.scss";

import { NavbarMenuList } from "./list/NavbarMenuList";
import { ButtonNavigateLogin, ButtonNavigateBasket } from "components/ui";

export const NavbarMenuApp: FC = () => {
    return (
        <section className={cl.container}>
            <NavbarMenuList className={cl.nav} />
            <ButtonNavigateLogin />
            <ButtonNavigateBasket />
        </section>
    );
};
