import { FC } from "react";
import cl from "../../../../assets/styles/pages/delivery/delivery.module.sass";
import { deliveryCardInfo } from "./types and const/const";
import DeliveryItem from "./DeliveryItem";

const DeliveryList: FC = () => {
  return (
    <figure className={cl.cards}>
      {deliveryCardInfo.map((item) => (
        <DeliveryItem {...item} key={item.id} />
      ))}
    </figure>
  );
};

export default DeliveryList;
