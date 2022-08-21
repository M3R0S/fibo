import React, { FC } from "react";
import cl from "../../../assets/styles/navbar/navInfo.module.sass";
import logoImg from "../../../assets/image/header-logo.png";

const NavInfo: FC = () => {
  return (
    <section className={cl.container}>
      <img src={logoImg} alt="Logo" />
      <figure className={cl.delivery_info}>
        <div>
          <h1>
            Доставка пасты<span>Москва</span>
          </h1>
        </div>
        <div>
          <a
            href="https://dostavka.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс еда
          </a>
          <a
            href="https://dostavka.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            4.8
          </a>
          <b>Время доставки</b>
          <b>от 31 мин</b>
        </div>
      </figure>
      <button className={cl.order_call} type="button">
        Заказать звонок
      </button>
      <button className={cl.call_number}>8 499 391-84-49</button>
    </section>
  );
};

export default NavInfo;
