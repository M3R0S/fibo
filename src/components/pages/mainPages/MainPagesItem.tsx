import React, { FC } from "react";
import cl from "../../../assets/styles/pages/mainPages/mainPages.module.sass";

interface IMainPageItemProps {
  h2Text: string;
  pText: string;
  strongText: string;
  img: string;
}

const MainPagesItem: FC<IMainPageItemProps> = ({
  h2Text,
  pText,
  strongText,
  img,
}) => {
  return (
    <article className={cl.group_item}>
      <div className={cl.main_info}>
        <img src={img} alt="pizza" />
        <h2>{h2Text}</h2>
        <p>{pText}</p>
      </div>
      <div className={cl.footer_info}>
        <strong>{strongText}</strong>
        <button type="button" className={cl.basket}>
          В корзину
        </button>
      </div>
    </article>
  );
};

export default MainPagesItem;
