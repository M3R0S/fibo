import React, { FC, useEffect } from "react";
import cl from "../../../../assets/styles/pages/mainProduct/mainProduct.module.sass";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import {
  getMainProductItem,
  SectionName,
  setOpenModal,
} from "../../../../store/slice/mainProductItemSlice";

interface IMainProductItemProps {
  h2Text: string;
  pText: string;
  strongText: string;
  img: string;
  id: number;
  type: SectionName
}

const MainProductItem: FC<IMainProductItemProps> = ({
  h2Text,
  pText,
  strongText,
  img,
  id,
  type
}) => {
  const dispatch = useAppDispatch();

  return (
    <article className={cl.group_item}>
      <div className={cl.main_info}>
        <img src={img} alt="pizza" />
        <h2>{h2Text}</h2>
        <p>{pText}</p>
      </div>
      <div className={cl.footer_info}>
        <strong>{strongText}</strong>
        <button
          type="button"
          onClick={() => {
            dispatch(setOpenModal([type, id]));
          }}
          className={cl.basket}
        >
          В корзину
        </button>
      </div>
    </article>
  );
};

export default MainProductItem;
