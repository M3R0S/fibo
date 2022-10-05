import React, { FC } from "react";
import { v4 as uuid } from "uuid";
import cl from "../../assets/styles/footer/footerMedia1200.module.sass";
import LogoImg from "../ui/assets/loader/logoImg/LogoImg";
import ButtonCallNumber from "../ui/Button/buttonCallNumber/ButtonCallNumber";
import ButtonHome from "../ui/Button/buttonHome/ButtonHome";
import ButtonOrderCall from "../ui/Button/buttonOrderCall/ButtonOrderCall";
import { linkContacts } from "./FooterContact";
import { paymentSystems, socialNetwork } from "./FooterInfo";

const FooterMedia1200: FC = () => {
  return (
    <section className={cl.container}>
      <ButtonHome>
        <LogoImg></LogoImg>
      </ButtonHome>
      <div className={cl.group_title}>
        <h1>Калорийность и состав</h1>
        <h1>Правовая информация</h1>
      </div>
      <h1 className={cl.social_title}>Мы в соцсетях:</h1>
      <figure>
        <div className={cl.group_contact}>
          {socialNetwork.map(({ link, name }) => (
            <a href={link} key={uuid()}>
              {name}
            </a>
          ))}
        </div>
      </figure>
      <div className={cl.contacts_cont}>
        <strong>Остались вопросы? А мы всегда на связи:</strong>
        <figure className={cl.contacts}>
          {linkContacts.map((linkContact) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a href={linkContact} key={uuid()}></a>
          ))}
          <button className={cl.tell}>Написать нам</button>
        </figure>
      </div>
      <div className={cl.info_cont}>
        <ButtonCallNumber className={cl.call_number}></ButtonCallNumber>
        <ButtonOrderCall className={cl.order_call}></ButtonOrderCall>
        <div className={cl.payment_systems}>
          {paymentSystems.map((paySys) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a href={paySys} target="_blank" rel="noreferrer" key={uuid()}></a>
          ))}
        </div>
      </div>
      <div className={cl.grop_footer}>
        <b>Fibo Все праав защищены © 2022</b>
      </div>
    </section>
  );
};

export default FooterMedia1200;