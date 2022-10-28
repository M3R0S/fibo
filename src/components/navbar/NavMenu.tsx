import React, { FC } from "react";
import cl from "../../assets/styles/navbar/navMenu.module.sass";
import ButtonHome from "../ui/Button/buttonHome/ButtonHome";
import LogoImg from "../ui/assets/logoImg/LogoImg";
import NavMenuItem from "./NavMenuItem";
import ButtonBasket from "../ui/Button/buttonBasket/ButtonBasket";
import ButtonLogin from "../ui/Button/buttonLogin/ButtonLogin";

interface INavMenu {
  scrollDown: boolean;
}

const NavMenu: FC<INavMenu> = ({ scrollDown }) => {
  return (
    <section className={cl.container}>
      {scrollDown && (
        <ButtonHome>
          <LogoImg className={cl.logo_scroll} />
        </ButtonHome>
      )}
      <nav className={cl.navbar}>
        <ul className={cl.navbar_list}>
          {navLinks.map((obj) => (
            <NavMenuItem
              {...obj}
              clNavLink={cl.nav}
              clNavLinkActive={cl.nav_active}
              key={obj.id}
            ></NavMenuItem>
          ))}
        </ul>
      </nav>
      {!scrollDown && <ButtonLogin className={cl.login}></ButtonLogin>}
      <ButtonBasket></ButtonBasket>
    </section>
  );
};

export default React.memo(NavMenu);

export const navLinks = [
  {
    id: 1,
    to: "/main",
    title: "Пицца",
    isAnchor: true,
    idEllement: "mainProductSectionPizza",
  },
  {
    id: 2,
    to: "/main",
    title: "Паста",
    isAnchor: true,
    idEllement: "mainProductSectionPasta",
  },
  {
    id: 3,
    to: "/main",
    title: "Супы",
    isAnchor: true,
    idEllement: "mainProductSectionSoup",
  },
  {
    id: 4,
    to: "/main",
    title: "Салаты",
    isAnchor: true,
    idEllement: "mainProductSectionSalad",
  },
  {
    id: 5,
    to: "/error",
    title: "Напитки",
    isAnchor: false,
    idEllement: "mainProductSectionWater",
  },
  {
    id: 6,
    to: "/error",
    title: "Десерты",
    isAnchor: false,
    idEllement: "mainProductSectionDesert",
  },
  {
    id: 7,
    to: "/error",
    title: "Бакалея",
    isAnchor: false,
    idEllement: "mainProductSectionBakaly",
  },
  {
    id: 8,
    to: "/error",
    title: "Антипасти",
    isAnchor: false,
    idEllement: "mainProductSectionAntipasty",
  },
  {
    id: 9,
    to: "/promotion",
    title: "Акции",
    isAnchor: false,
    idEllement: "Promotion",
  },
  {
    id: 10,
    to: "/error",
    title: "Комбо",
    isAnchor: false,
    idEllement: "Combo",
  },
  {
    id: 11,
    to: "/contact",
    title: "Контакты",
    isAnchor: false,
    idEllement: "Contact",
  },
];
