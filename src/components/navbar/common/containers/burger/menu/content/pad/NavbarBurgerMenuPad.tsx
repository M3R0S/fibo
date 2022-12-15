import { FC } from "react";

import cl from "./navbarBurgerMenuPad.module.scss";

import { NavbarMenuList } from "components/navbar/common/containers/menu/content";
import { ButtonNavigateLogin } from "components/ui";

export const NavbarBurgerMenuPad: FC = () => {

    return (
            <NavbarMenuList className={cl.nav}>
                <ButtonNavigateLogin className={cl.login} />
            </NavbarMenuList>
    );
};
