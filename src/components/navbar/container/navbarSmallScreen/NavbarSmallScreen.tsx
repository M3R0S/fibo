import { FC } from "react";
import cl from "./navbarSmallScreen.module.sass";
import ButtonBasket from "components/ui/components/button/buttonBasket/ButtonBasket";
import ButtonCallNumber from "components/ui/components/button/buttonCallNumber/ButtonCallNumber";
import ButtonNavbarBurger from "components/ui/components/button/buttonNavbarBurger/ButtonNavbarBurger";
import NavbarBurgerMenu from "components/navbar/content/navbarBurgerMenu/NavbarBurgerMenu";
import Logo from "components/ui/assets/logo/Logo";

const NavbarSmallScreen: FC = () => {
  return (
    <header className={cl.navbar}>
      <section className={cl.container}>
        <Logo />
        <div className={cl.control}>
          <ButtonCallNumber className={cl.call_number} />
          <ButtonBasket className={cl.basket} />
          <ButtonNavbarBurger className={cl.burger} />
          <NavbarBurgerMenu />
        </div>
      </section>
    </header>
  );
};

export default NavbarSmallScreen;
