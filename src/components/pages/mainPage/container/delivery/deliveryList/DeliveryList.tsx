import { FC } from "react";
import cl from "./deliveryList.module.sass";
import { deliveryCardInfo } from "../const";
import DeliveryItem from "../../../content/delivery/item/DeliveryItem";

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
