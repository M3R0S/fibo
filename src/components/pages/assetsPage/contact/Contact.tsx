import React, { FC } from "react";
import Iframe from "react-iframe";
import cl from "../../../../assets/styles/pages/contact/contact.module.sass";

const Contact: FC = () => {
  return (
    <main className={cl.main_contact}>
      <section className={cl.container}>
        <div className={cl.yandex_map}>
          <Iframe
            className={cl.yandex_map}
            url="https://yandex.ru/map-widget/v1/?um=constructor%3A6dd7492e275800bb695cf9b202e9f42dc8a6c7071e85355a5ffeeb23eae28624&amp;source=constructor"
            width="1110"
            height="322"
            title="map"
          ></Iframe>
        </div>
        <strong className={cl.number}>8 800 333-36-62</strong>
        <h1>ул. Проспект Вернадского 86В</h1>
        <p>Доставка и самовывоз 10:00 — 23:00</p>
      </section>
    </main>
  );
};

export default Contact;
