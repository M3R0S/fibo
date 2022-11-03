import React, { FC } from "react";
import { v4 as uuid } from "uuid";
import cl from "../../assets/styles/footer/footerMedia700.module.sass";
import LogoImg from "../ui/assets/logoImg/LogoImg";
import ButtonCallNumber from "../ui/components/button/buttonCallNumber/ButtonCallNumber";
import ButtonHome from "../ui/components/button/buttonHome/ButtonHome";
import ButtonOrderCall from "../ui/components/button/buttonOrderCall/ButtonOrderCall";
import { linkContacts } from "./FooterContact";
import { paymentSystems, socialNetwork } from "./FooterInfo";

const FooterMedia700: FC = () => {
  return (
    <section className={cl.container}>
      <div className={cl.media_cont}>
        <ButtonHome className={cl.button_home}>
          <LogoImg></LogoImg>
        </ButtonHome>
        <div className={cl.info_cont}>
          <ButtonCallNumber className={cl.call_number}></ButtonCallNumber>
          <ButtonOrderCall className={cl.order_call}></ButtonOrderCall>
        </div>
      </div>
      <div className={cl.group_title}>
        <div className={cl.group_title_top}>
          <a href="/">Калорийность и состав</a>
          <a href="/">Правовая информация</a>
        </div>
        <div className={cl.group_title_bottom}>
          <h1 className={cl.social_title}>Мы в соцсетях:</h1>
        </div>
        <figure className={cl.group_contact}>
          {socialNetwork.map(({ link, name }) => (
            <a href={link} key={uuid()}>
              {name}
            </a>
          ))}
        </figure>
      </div>
      <div className={cl.contacts_cont}>
        <strong>Остались вопросы? А мы всегда на связи:</strong>
        <figure className={cl.contacts}>
          {/* <div className={cl.contacts_links}> */}
          {linkContacts.map((linkContact) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a href={linkContact} key={uuid()}></a>
          ))}
          {/* </div> */}
        </figure>
        <button className={cl.tell}>Написать нам</button>
      </div>
      <div className={cl.grop_footer}>
        <b>Fibo Все праав защищены © 2022</b>
        <div className={cl.payment_systems}>
          {paymentSystems.map((paySys) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a href={paySys} target="_blank" rel="noreferrer" key={uuid()}></a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterMedia700;
