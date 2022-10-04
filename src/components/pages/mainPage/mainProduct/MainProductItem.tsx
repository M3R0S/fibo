import React, { FC } from "react";
import cl from "../../../../assets/styles/pages/mainProduct/mainProduct.module.sass";
import { useAppDispatch } from "../../../../hook/storeHook/useStore";
import {
  SectionName,
  setOpenModal,
} from "../../../../store/slice/mainProductItemSlice";

interface IMainProductItemProps {
  title: string;
  info: string;
  price: number;
  img: string;
  id: number;
  type: SectionName;
}

const MainProductItem: FC<IMainProductItemProps> = ({
  title,
  info,
  price,
  img,
  id,
  type,
}) => {
  const dispatch = useAppDispatch();

  return (
    <article className={cl.group_item}>
      <div className={cl.header_info}>
        <img src={img} alt="pizza" />
        <div className={cl.header_title}>
          <h2>{title}</h2>
        </div>
        <p>{info.length > 100 ? info.substring(0, 100) + "..." : info}</p>
      </div>
      <div className={cl.footer_info}>
        <strong>от {price} ₽</strong>
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
