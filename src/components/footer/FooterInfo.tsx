import React from "react";
import logo from "../../assets/image/header-logo.png";
import cl from "../../assets/styles/footer/footer.module.sass";
import { v4 as uuidv4 } from "uuid";

const FooterInfo = () => {
  return (
    <section className={cl.footer_info_cont}>
      <img src={logo} alt="Logo" />
      <div className={cl.group_h1}>
        <h1>Калорийность и состав</h1>
        <h1>Правовая информация</h1>
      </div>
      <h1 className={cl.i_social}>Мы в соцсетях:</h1>
      <figure>
        <div className={cl.group_contact}>
          {socialNetwork.map(({ link, name }) => (
            <a href={link} key={uuidv4()}>
              {name}
            </a>
          ))}
          {/* <p>Москва ул. Проспект Вернадского 86В</p> */}
        </div>
        <div className={cl.grop_footer}>
          <b>Fibo Все праав защищены © 2022</b>
          <div className={cl.payment_systems}>
            {paymentSystems.map((paySys) => (
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              <a href={paySys} target="_blank" rel="noreferrer" key={uuidv4()}></a>
            ))}
          </div>
        </div>
      </figure>
    </section>
  );
};

const paymentSystems = [
  "https://www.visa.com.ru/",
  "https://www.paypal.com/ru/home",
  "https://www.mastercard.ru/ru-ru.html",
];

const socialNetwork = [
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