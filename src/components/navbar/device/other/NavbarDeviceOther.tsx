import { FC } from "react";

import cl from "./navbarDeviceOther.module.scss";

import { ButtonBurgerMenu, NavbarBurgerMenuApp } from "components/navbar/common";
import { ButtonNavigateBasket, ButtonCallNumber, Logo } from "components/ui";

export const NavbarDeviceOther: FC = () => {
    return (
        <header className={cl.navbar}>
            <section className={cl.container}>
                <Logo />
                <div className={cl.control}>
                    <ButtonCallNumber className={cl.call_number} />
                    <ButtonNavigateBasket className={cl.basket} />
                    <ButtonBurgerMenu className={cl.burger} />
                    <NavbarBurgerMenuApp />
                </div>
            </section>
        </header>
    );
};
