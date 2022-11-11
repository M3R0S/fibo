import { FC } from "react";
import cl from "../../../../assets/styles/pages/delivery/delivery.module.sass";
import useElementOnScreen from "../../../../hook/elementOnScreenHook/useElementOnScreen";
import DeliveryList from "./DeliveryList";
import YandexMap from "./YandexMap";

const DeliveryApp: FC = () => {

  const {containerRef, isIntersecting} = useElementOnScreen({threshold: 0.7})

  return (
    <section ref={containerRef} className={cl.container}>
      <div className={cl.content}>
        <h1>Оплата и доставка</h1>
        <DeliveryList />
        <YandexMap isIntersecting={isIntersecting}/>
      </div>
    </section>
  );
};

export default DeliveryApp;
