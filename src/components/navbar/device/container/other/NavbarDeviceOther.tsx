import { FC } from "react";

import cl from "./navbarDeviceOther.module.scss";

import { ButtonBurger, NavbarBurgerMenuApp } from "components/navbar/common";
import { ButtonNavigateBasket, ButtonCallNumber, Logo } from "components/ui";

export const NavbarDeviceOther: FC = () => {
    return (
        <header className={cl.navbar}>
            <section className={cl.container}>
                <Logo />
                <div className={cl.control}>
                    <ButtonCallNumber className={cl.call_number} />
                    <ButtonNavigateBasket className={cl.basket} />
                    <ButtonBurger className={cl.burger} />
                    <NavbarBurgerMenuApp />
                </div>
            </section>
        </header>
    );
};
