import { FC } from "react";
import cl from "./contactPage.module.sass";
import ButtonCallNumber from "components/ui/components/button/buttonCallNumber/ButtonCallNumber";
import useLocationLinkActive from "hook/useLocationLinkActive/useLocationLinkActive";

const ContactPage: FC = () => {
  useLocationLinkActive();

  return (
    <main className={cl.page}>
      <section className={cl.container}>
        <div className={cl.yandex_map}>
          <iframe
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

export default ContactPage;
