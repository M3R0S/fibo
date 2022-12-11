import { FC } from "react";

import { useScreenSize } from "hook";

import { NavbarBurgerMenuPad } from "./pad/NavbarBurgerMenuPad";
import { NavbarBurgerMenuMobile } from "./mobile/NavbarBurgerMenuMobile";

export const NavbarBurgerMenuApp: FC = () => {
    const { screenWidth } = useScreenSize();

    if (screenWidth > 530) {
        return <NavbarBurgerMenuPad />;
    } else {
        return <NavbarBurgerMenuMobile />;
    }
};
