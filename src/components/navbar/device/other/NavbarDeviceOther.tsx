import { FC } from "react";
import cl from "./navbarDeviceOther.module.scss";
import { ButtonNavigateBasket } from "components/ui";
import { ButtonCallNumber } from "components/ui";
import ButtonNavbarBurger from "components/ui/components/button/buttonNavbarBurger/ButtonNavbarBurger";
import { Logo } from "components/ui";
import { NavbarBurgerMenu } from "components/navbar/common";

export const NavbarDeviceOther: FC = () => {
    return (
        <header className={cl.navbar}>
            <section className={cl.container}>
                <Logo />
                <div className={cl.control}>
                    <ButtonCallNumber className={cl.call_number} />
                    <ButtonNavigateBasket className={cl.basket} />
                    <ButtonNavbarBurger className={cl.burger} />
                    <NavbarBurgerMenu />
                </div>
            </section>
        </header>
    );
};
