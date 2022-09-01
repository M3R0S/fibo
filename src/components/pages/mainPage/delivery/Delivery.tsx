import React, { FC } from "react";
import cl from "../../../../assets/styles/pages/delivery/delivery.module.sass";
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
              <div className={cl.delivery_text}>
                <h2>{h2Text}</h2>
              </div>
            </article>
          ))}
        </figure>
        <div className={cl.yandex_map}>
          <Iframe
            className={cl.yandex_map}
            url="https://yandex.ru/map-widget/v1/?um=constructor%3A6dd7492e275800bb695cf9b202e9f42dc8a6c7071e85355a5ffeeb23eae28624&amp;source=constructor"
            width="1110"
            height="322"
            title="map"
          ></Iframe>
        </div>
      </div>
    </section>
  );
};

const deliveryCardInfo = [
  {
    h2Text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, accusantium repellat quos ratione ipsa dicta accusamus corrupti expedita mollitia exercitationem cum vitae porro in eius adipisci sapiente quia, eveniet iste.",
    classN: "delivery_icon1",
  },
  {
    h2Text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, tempora eius! Doloribus qui deleniti possimus ex cumque ipsam consequatur aliquid?",
    classN: "delivery_icon2",
  },
  {
    h2Text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facilis deserunt, et dolore mollitia maxime!",
    classN: "delivery_icon3",
  },
  {
    h2Text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus placeat cumque, accusantium, enim molestiae ducimus iste esse ullam quisquam voluptatibus quo. Deleniti ipsum qui magni alias quaerat, reiciendis culpa. lorem20",
    classN: "delivery_icon4",
  },
];

export default Delivery;
