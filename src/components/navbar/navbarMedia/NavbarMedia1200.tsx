import React from "react";
import cl from "../../../assets/styles/navbar/navbarMedia1200.module.sass";
import LogoImg from "../../ui/assets/logoImg/LogoImg";
import ButtonBasket from "../../ui/Button/buttonBasket/ButtonBasket";
import ButtonCallNumber from "../../ui/Button/buttonCallNumber/ButtonCallNumber";
import ButtonHome from "../../ui/Button/buttonHome/ButtonHome";
import NavbarBurger from "./NavbarBurger";

const NavbarMedia1200 = () => {
  return (
    <section className={cl.container}>
      <ButtonHome>
        <LogoImg></LogoImg>
      </ButtonHome>
      <div className={cl.navbar_info}>
        <ButtonCallNumber className={cl.call_number}></ButtonCallNumber>
        <ButtonBasket className={cl.basket}></ButtonBasket>
        <NavbarBurger></NavbarBurger>
      </div>
    </section>
  );
};

export default NavbarMedia1200;
