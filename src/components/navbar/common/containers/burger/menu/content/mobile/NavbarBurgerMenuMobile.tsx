import { FC } from "react";

import cl from "./navbarBurgerMenuMobile.module.scss";

import { useCloseBurgerMenu } from "hook";

import { NavbarMenuList } from "components/navbar/common/containers/menu/content";
import { Logo, ButtonNavigateBasket, ButtonCallNumber, ButtonNavigateLogin } from "components/ui";

export const NavbarBurgerMenuMobile: FC = () => {
    const { closeBurgerMenu } = useCloseBurgerMenu();

    return (
            <section className={cl.container}>
                <header className={cl.control}>
                    <Logo classNameLogo={cl.logo} />
                    <button className={cl.closed} onClick={closeBurgerMenu} />
                </header>
                <NavbarMenuList className={cl.nav}>
                    <ButtonNavigateLogin className={cl.button_login} />
                    <ButtonCallNumber className={cl.button_call_number} />
                    <ButtonNavigateBasket className={cl.button_basket} />
                </NavbarMenuList>
            </section>
    );
};
