import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import cl from "../../../assets/styles/navbar/navMenu.module.sass";
import { v4 as uuidv4 } from "uuid";

const NavMenu: FC = () => {
  return (
    <section className={cl.container}>
      <nav>
        <ul>
          {navLinks.map(({ to, title }) => (
            <li key={uuidv4()}>
              <NavLink
                className={({ isActive }) => (isActive ? cl.active : cl.nav_disable)}
                to={to}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" className={cl.login}>
        Войти
      </button>
      <button type="button" className={cl.basket}>
        Корзина | '1'
      </button>
    </section>
  );
};

export const navLinks = [
  { to: "", title: "Пицца" },
  { to: "", title: "Паста" },
  { to: "", title: "Супы" },
  { to: "", title: "Салаты" },
  { to: "", title: "Напитки" },
  { to: "", title: "Десерты" },
  { to: "", title: "Бакалея" },
  { to: "", title: "Антипасти" },
  { to: "/promotion", title: "Акции" },
  { to: "", title: "Комбо" },
  { to: "/contact", title: "Контакты" },
];

export default NavMenu;
