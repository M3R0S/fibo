import React from "react";
import logo from "../../assets/image/header-logo.png";
import cl from "../../assets/styles/footer/footer.module.sass";
import { v4 as uuidv4 } from "uuid";
import ButtonHome from "../ui/Button/buttonHome/ButtonHome";
import LogoImg from "../ui/assets/loader/logoImg/LogoImg";

const FooterInfo = () => {
  return (
    <section className={cl.footer_info_cont}>
      <ButtonHome className={cl.button_home}>
        <LogoImg></LogoImg>
      </ButtonHome>
      <div className={cl.group_title}>
        <div className={cl.group_title_top}>
          <a href="/">Калорийность и состав</a>
          <a href="/">Правовая информация</a>
        </div>
        <div className={cl.group_title_bottom}>
          <h1 className={cl.social_title}>Мы в соцсетях:</h1>
        </div>
      </div>
      <figure>
        <div className={cl.group_contact}>
          {socialNetwork.map(({ link, name }) => (
            <a href={link} key={uuidv4()}>
              {name}
            </a>
          ))}
        </div>
        <div className={cl.grop_footer}>
          <b>Fibo Все праав защищены © 2022</b>
          <div className={cl.payment_systems}>
            {paymentSystems.map((paySys) => (
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              <a
                href={paySys}
                target="_blank"
                rel="noreferrer"
                key={uuidv4()}
              ></a>
            ))}
          </div>
        </div>
      </figure>
    </section>
  );
};

export const paymentSystems = [
  "https://www.visa.com.ru/",
  "https://www.paypal.com/ru/home",
  "https://www.mastercard.ru/ru-ru.html",
];

export const socialNetwork = [
  { name: "YouTube", link: "https://www.youtube.com/" },
  { name: "Facebook", link: "https://facebook.com/" },
  { name: "Instagram", link: "https://instagram.com/" },
  { name: "ВКонтакте", link: "https://vk.com/" },
  {
    name: "Москва ул. Проспект Вернадского 86В",
    link: "https://yandex.ru/maps/",
  },
];

export default FooterInfo;
