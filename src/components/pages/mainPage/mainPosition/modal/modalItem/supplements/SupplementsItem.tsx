import React, { FC, useState } from "react";
import cl from "../../../../../assets/styles/pages/mainProduct/supplements.module.sass";
import { TSupplementsItem } from "../../../../../../../store/slice/supplementsSlice";

const SupplementsItem: FC<TSupplementsItem> = ({ title, img, price }) => {
  const [supActive, setSupActive] = useState<boolean>(false);
  return (
    <div
      className={
        supActive
          ? `${cl.supplements_card} ${cl.supplements_card_active}`
          : cl.supplements_card
      }
      onClick={() => setSupActive(!supActive)}
    >
      <img src={img} alt={img} />
      <h3>{title}</h3>
      <strong>{`${price} ₽`}</strong>
    </div>
  );
};

export default SupplementsItem;
