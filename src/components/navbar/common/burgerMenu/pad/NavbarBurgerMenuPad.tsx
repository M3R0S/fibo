import { FC } from "react";
import { CSSTransition } from "react-transition-group";

import cl from "./navbarBurgerMenuPad.module.scss";
import { TIMEOUT_ANIMATION_BURGER } from "../../const";

import { useAppSelector } from "store";

import { NavbarMenuList } from "../../menu/list/NavbarMenuList";
import { ButtonNavigateLogin } from "components/ui";

export const NavbarBurgerMenuPad: FC = () => {
    const { openNavbarBurger } = useAppSelector((state) => state.navbar);

    return (
        <CSSTransition
            in={openNavbarBurger}
            timeout={TIMEOUT_ANIMATION_BURGER}
            unmountOnExit
            classNames={{
                enter: cl.nav_enter,
                enterActive: cl.nav_enter_active,
                exitActive: cl.nav_exit_active,
            }}
        >
            <NavbarMenuList className={cl.nav}>
                <ButtonNavigateLogin className={cl.login} />
            </NavbarMenuList>
        </CSSTransition>
    );
};
