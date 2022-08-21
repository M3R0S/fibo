import React, { FC } from "react";
import cl from "../../../assets/styles/pages/delivery/delivery.module.sass";
import { v4 as uuidv4 } from "uuid";
import Iframe from "react-iframe";

const Delivery: FC = () => {
  return (
    <section className={cl.container}>
      <div className={cl.delivery_content}>
        <h1>Оплата и доставка</h1>
        <figure className={cl.delivery_cards}>
          {deliveryCardInfo.map(({ h2Text, classN }) => (
            <article key={uuidv4()} className={cl.delivery_card}>
              <div className={cl.rectangle_icon}>
                <span className={cl[classN]}></span>
              </div>
              <h2>{h2Text}</h2>
            </article>
          ))}
        </figure>
        <div className={cl.yandex_map}></div>
        <Iframe
          className={cl.yandex_map}
          url="https://yandex.ru/map-widget/v1/?um=constructor%3A6dd7492e275800bb695cf9b202e9f42dc8a6c7071e85355a5ffeeb23eae28624&amp;source=constructor"
          width="1110"
          height="322"
          title="map"
        ></Iframe>
      </div>
    </section>
  );
};

const deliveryCardInfo = [
  {
    h2Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    classN: "delivery_icon1",
  },
  {
    h2Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    classN: "delivery_icon2",
  },
  {
    h2Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    classN: "delivery_icon3",
  },
  {
    h2Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    classN: "delivery_icon4",
  },
];

export default Delivery;
