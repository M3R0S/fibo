import React, { FC } from 'react'
import cl from "../../../../../assets/styles/pages/mainProduct/supplements.module.sass";
import { TSupplementsItem } from '../../../../../store/slice/supplementsSlice';

const SupplementsItem: FC<TSupplementsItem> = ({h1Text,img,strongText}) => {
  return (
    <div className={cl.supplements_card}>
      <img src={img} alt={img} />
      <h1>{h1Text}</h1>
      <strong>{strongText}</strong>
    </div>
  );
};

export default SupplementsItem