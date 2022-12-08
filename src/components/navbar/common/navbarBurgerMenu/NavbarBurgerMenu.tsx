import { FC } from "react";

import { useScreenSize } from "hook";

import { NavbarBurgerMenuPad } from "./navbarBurgerMenuPad/NavbarBurgerMenuPad";
import { NavbarBurgerMenuMobile } from "./navbarBurgerMenuMobile/NavbarBurgerMenuMobile";

export const NavbarBurgerMenu: FC = () => {
    const { screenWidth } = useScreenSize();

    if (screenWidth > 530) {
        return <NavbarBurgerMenuPad />;
    } else {
        return <NavbarBurgerMenuMobile />;
    }
};
