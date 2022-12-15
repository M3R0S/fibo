import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

import cl from "./navbarDeviceComputer.module.scss";
import { useProcessingNavbarInfo } from "./logic";
import { TIMEOUT_ANIMATION_SCROLL_NAVBAR } from "./constants/const";

import { NavbarInfoApp, NavbarMenuApp } from "components/navbar/common";

export const NavbarDeviceComputer: FC = () => {
    const { isScrollDown, isEnabledNavbarInfo, onDisabledNavbarInfo, onEnabledNavbarInfo } =
        useProcessingNavbarInfo();

    const transitionClassNames: CSSTransitionClassNames = {
        enterActive: cl.navbar_enter_active,
        exitActive: cl.navbar_exit_active,
    };

    return (
        <CSSTransition
            in={isScrollDown}
            timeout={TIMEOUT_ANIMATION_SCROLL_NAVBAR}
            onExiting={onEnabledNavbarInfo}
            onEntered={onDisabledNavbarInfo}
            classNames={transitionClassNames}
        >
            <header className={cl.navbar}>
                {isEnabledNavbarInfo ? <NavbarInfoApp /> : null}
                <NavbarMenuApp />
            </header>
        </CSSTransition>
    );
};
