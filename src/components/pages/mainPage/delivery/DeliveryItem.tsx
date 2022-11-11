import { FC } from "react";
import cl from "../../../../assets/styles/pages/delivery/delivery.module.sass";
import { TDeliveryCardInfo } from "./types and const/types";

const DeliveryItem: FC<TDeliveryCardInfo> = ({ img, info }) => {
  return (
    <article className={cl.card}>
      <div className={cl.rectangle_icon}>
        <img src={img} alt="Визуализация действия" />
      </div>
      <div className={cl.info}>
        <h2>{info}</h2>
      </div>
    </article>
  );
};

export default DeliveryItem;
