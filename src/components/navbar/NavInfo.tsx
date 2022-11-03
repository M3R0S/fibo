import React, { FC } from "react";
import cl from "../../assets/styles/navbar/navInfo.module.sass";
import ButtonHome from "../ui/components/button/buttonHome/ButtonHome";
import LinkBlank from "../ui/components/link/linkBlank/LinkBlank";
import LogoImg from "../ui/assets/logoImg/LogoImg";
import ButtonOrderCall from "../ui/components/button/buttonOrderCall/ButtonOrderCall";
import ButtonCallNumber from "../ui/components/button/buttonCallNumber/ButtonCallNumber";

const NavInfo: FC = () => {
  return (
    <section className={cl.container}>
      <div className={cl.main_content}>
        <ButtonHome>
          <LogoImg></LogoImg>
        </ButtonHome>
        <figure className={cl.delivery_info}>
          <h1>
            Доставка пасты<span>Москва</span>
          </h1>
          <div className={cl.delivery_yandex}>
            <LinkBlank href="https://dostavka.yandex.ru/">Яндекс еда</LinkBlank>
            <LinkBlank href="https://dostavka.yandex.ru/">4.8</LinkBlank>
            <b>Время доставки</b>
            <b>от 31 мин</b>
          </div>
        </figure>
      </div>
      <div className={cl.button_content}>
        <ButtonOrderCall></ButtonOrderCall>
        <ButtonCallNumber className={cl.call_number}></ButtonCallNumber>
      </div>
    </section>
  );
};

export default NavInfo;
