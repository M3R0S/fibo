import { FC } from "react";
import { CSSTransition } from "react-transition-group";

import cl from "./navbarDeviceComputer.module.scss";
import { useProcessingNavbarInfo } from "./logic";
import { TIMEOUT_ANIMATION_SCROLL_NAVBAR } from "../const";

import { NavbarInfoApp, NavbarMenuApp } from "components/navbar/common";

export const NavbarDeviceComputer: FC = () => {
    const { isScrollDown, isEnabledNavbarInfo, onDisabledNavbarInfo, onEnabledNavbarInfo } =
        useProcessingNavbarInfo();

    return (
        <CSSTransition
            in={isScrollDown}
            timeout={TIMEOUT_ANIMATION_SCROLL_NAVBAR}
            onExiting={onEnabledNavbarInfo}
            onEntered={onDisabledNavbarInfo}
            classNames={{
                enterActive: cl.navbar_enter_active,
                exitActive: cl.navbar_exit_active,
            }}
        >
            <header className={cl.navbar}>
                {isEnabledNavbarInfo ? <NavbarInfoApp /> : null}
                <NavbarMenuApp />
            </header>
        </CSSTransition>
    );
};
