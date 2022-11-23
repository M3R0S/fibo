import { FC } from "react";
import cl from "./deliveryApp.module.sass";
import useElementOnScreen from "hook/useElementOnScreen/useElementOnScreen";
import DeliveryList from "../deliveryList/DeliveryList";
import YandexMap from "../../../content/delivery/yandexMap/YandexMap";

const DeliveryApp: FC = () => {
  const { containerRef, isIntersecting } = useElementOnScreen({
    threshold: 0.7,
  });

  return (
    <section ref={containerRef} className={cl.container}>
      <div className={cl.content}>
        <h1>Оплата и доставка</h1>
        <DeliveryList />
        <YandexMap isIntersecting={isIntersecting} />
      </div>
    </section>
  );
};

export default DeliveryApp;
