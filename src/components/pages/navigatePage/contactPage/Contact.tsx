import { FC } from "react";
import cl from "../../../../assets/styles/pages/contact/contact.module.sass";
import ButtonCallNumber from "../../../ui/components/button/buttonCallNumber/ButtonCallNumber";

const Contact: FC = () => {
  return (
    <main className={cl.main_contact}>
      <section className={cl.container}>
        <div className={cl.yandex_map}>
          <iframe
            className={cl.yandex_map}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A6dd7492e275800bb695cf9b202e9f42dc8a6c7071e85355a5ffeeb23eae28624&amp;source=constructor"
            title="map"
          />
        </div>
        <ButtonCallNumber className={cl.call_number} />
        <h1>ул. Проспект Вернадского 86В</h1>
        <p>Доставка и самовывоз 10:00 — 23:00</p>
      </section>
    </main>
  );
};

export default Contact;
