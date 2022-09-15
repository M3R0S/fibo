import React, { FC, useState } from 'react'
import cl from "../../../../../assets/styles/pages/mainProduct/supplements.module.sass";
import { TSupplementsItem } from '../../../../../store/slice/supplementsSlice';

const SupplementsItem: FC<TSupplementsItem> = ({h1Text,img,strongText}) => {
  const [supActive, setSupActive] = useState<boolean>(false)
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
      <h1>{h1Text}</h1>
      <strong>{strongText}</strong>
    </div>
  );
};

export default SupplementsItem