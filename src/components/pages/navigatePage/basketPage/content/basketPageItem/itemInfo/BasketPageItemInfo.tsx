import { FC } from "react";
import cl from "./basketPageItemInfo.module.sass";
import { TBasketPageItemInfo } from "./types";
import useBasketPageItemInfo from "./useBasketPageItemInfo";

interface IBasketPageItemInfo {
  title: string;
  img: string;
}

const BasketPageItemInfo: FC<TBasketPageItemInfo & IBasketPageItemInfo> = ({
  dough,
  info,
  size,
  typeProduct,
  weight,
  title,
  img,
}) => {
  const { exactlyInfo, footerInfo, onSetExactlyInfo, showExactlyInfo } = useBasketPageItemInfo({
    dough,
    info,
    size,
    typeProduct,
    weight,
  });

  return (
    <div className={cl.container}>
      <img src={img} alt="Продукция" />
      <div className={cl.info}>
        <h2>{title}</h2>
        <p>{exactlyInfo}</p>
        <span onClick={onSetExactlyInfo}>{showExactlyInfo}</span>
        <p>{footerInfo}</p>
      </div>
    </div>
  );
};

export default BasketPageItemInfo;
