import React, { FC } from 'react'
import { TNewPositionItem } from '../../../store/slice/newPositionSlice';
import cl from "../../../assets/styles/pages/newPosition/newPosition.module.sass";

const NewPositionItem: FC<TNewPositionItem> = ({h2Text, img, strongText}) => {
  return (
    <button className={cl.new_position_card}>
      <img src={img} alt="New Position" />
      <div className={cl.new_position_info}>
        <h2>{h2Text}</h2>
        <strong>{strongText}</strong>
      </div>
    </button>
  );
}

export default NewPositionItem