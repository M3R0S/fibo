import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import cl from "../../../assets/styles/navbar/navMenu.module.sass";
import logoImg from "../../../assets/image/header-logo.png";
import { v4 as uuidv4 } from "uuid";
import { navLinks } from "./NavMenu";

const NavMenuScroll: FC = () => {
  return (
    <section className={cl.container}>
      <Link to="/main">
        <img src={logoImg} alt="Logo" className={cl.logo_scroll} />
      </Link>
      <nav>
        <ul>
          {navLinks.map(({ to, title }) => (
            <li key={uuidv4()}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? cl.active : cl.nav_disable
                }
                to={to}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" className={cl.basket}>
        Корзина | '1'
      </button>
    </section>
  );
};

export default NavMenuScroll;
