import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

import cl from "./navbarBurgerMenuApp.module.scss";
import { TIMEOUT_ANIMATION_BURGER_POPUP } from "./constants/const";

import { useScreenSize } from "hook";
import { useAppSelector } from "store";

import { NavbarBurgerMenuMobile, NavbarBurgerMenuPad } from "./content";

export const NavbarBurgerMenuApp: FC = () => {
    const { screenWidth } = useScreenSize();
    const { openNavbarBurger } = useAppSelector((state) => state.navbar);

    const transitionClassNamesMobile: CSSTransitionClassNames = {
        enter: cl.mobile_container_enter,
        enterActive: cl.mobile_container_enter_active,
        exitActive: cl.mobile_container_exit_active,
    };

    const transitionCLassNamesPad: CSSTransitionClassNames = {
        enter: cl.pad_container_enter,
        enterActive: cl.pad_container_enter_active,
        exitActive: cl.pad_container_exit_active,
    };

    return (
        <CSSTransition
            in={openNavbarBurger}
            timeout={TIMEOUT_ANIMATION_BURGER_POPUP}
            unmountOnExit
            classNames={screenWidth >= 530 ? transitionCLassNamesPad : transitionClassNamesMobile}
        >
            {screenWidth >= 530 ? <NavbarBurgerMenuPad /> : <NavbarBurgerMenuMobile />}
        </CSSTransition>
    );
};
