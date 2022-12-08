import { FC } from "react";
import cl from "./navbarDeviceComputer.module.scss";
import { CSSTransition } from "react-transition-group";
import { useProcessingNavbarInfo } from "./useProcessingNavbarInfo";
import { NavbarInfo, NavbarMenu } from "components/navbar/common";
import { TIMEOUT_ANIMATION_SCROLL_NAVBAR } from "../const";

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
                {isEnabledNavbarInfo ? <NavbarInfo /> : null}
                <NavbarMenu />
            </header>
        </CSSTransition>
    );
};
