import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import cl from "../../../assets/styles/navbar/navMenu.module.sass";

const links = [] //

const NavMenu : FC = () => {
  return (
    <section className={cl.container}>
      <ul>
        <li>
          <NavLink to={"#"}>Пицца</NavLink>
        </li>
        <li>
          <NavLink to={"#"}>Паста</NavLink>
        </li>
        <li>
          <NavLink to={"#"}>Супы</NavLink>
        </li>
        <li>
          <NavLink to={"#"}>Салаты</NavLink>
        </li>
        <li>
          <NavLink to={"#"}>Напитки</NavLink>
        </li>
        <li>
          <NavLink to={"#"}>Десерты</NavLink>
        </li>
        <li>
          <NavLink to={"#"}>Бакалея</NavLink>
        </li>
        <li>
          <NavLink to={"#"}>Антипасти</NavLink>
        </li>
        <li>
          <NavLink to={"#"}>Акции</NavLink>
        </li>
        <li>
          <NavLink to={"#"}>Комбо</NavLink>
        </li>
        <li>
          <NavLink to={"#"}>Контакты</NavLink>
        </li>
      </ul>
      <button type="button" className={cl.login}>Войти</button>
      <button type="button" className={cl.basket}>Корзина | '1'</button>
    </section>
  );
}

export default NavMenu