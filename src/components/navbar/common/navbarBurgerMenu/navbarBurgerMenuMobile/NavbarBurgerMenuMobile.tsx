import { FC } from "react";
import { CSSTransition } from "react-transition-group";

import cl from "./navbarBurgerMenuMobile.module.scss";
import { TIMEOUT_ANIMATION_BURGER } from "../../const";

import { useAppSelector } from "store";
import { useCloseBurgerMenu } from "hook";

import { NavbarMenuList } from "../../navbarMenu/navbarMenuList/NavbarMenuList";
import { Logo, ButtonNavigateBasket, ButtonCallNumber, ButtonNavigateLogin } from "components/ui";

export const NavbarBurgerMenuMobile: FC = () => {
    const { closeBurgerMenu } = useCloseBurgerMenu();
    const { openNavbarBurger } = useAppSelector((state) => state.navbar);

    return (
        <CSSTransition
            in={openNavbarBurger}
            timeout={TIMEOUT_ANIMATION_BURGER}
            unmountOnExit
            classNames={{
                enter: cl.container_enter,
                enterActive: cl.container_enter_active,
                enterDone: cl.container_enter_done,
                exit: cl.container_exit,
                exitActive: cl.container_exit_active,
                exitDone: cl.container_exit_done,
            }}
        >
            <section className={cl.container}>
                <header className={cl.control}>
                    <Logo classNameLogo={cl.logo} />
                    <button className={cl.closed} type="button" onClick={closeBurgerMenu} />
                </header>
                <NavbarMenuList className={cl.nav}>
                    <ButtonNavigateLogin className={cl.button_login} />
                    <ButtonCallNumber className={cl.button_call_number} />
                    <ButtonNavigateBasket className={cl.button_basket} />
                </NavbarMenuList>
            </section>
        </CSSTransition>
    );
};
