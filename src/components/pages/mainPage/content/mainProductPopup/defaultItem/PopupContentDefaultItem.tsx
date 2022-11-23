import { FC, memo } from "react";
import cl from "./popupContentDefaultItem.module.sass";
import { IMainProductItem } from "store/slice/mainProduct/types";
import ButtonAddBasket from "components/ui/components/button/buttonAddBasket/ButtonAddBasket";
import { IPopupContentDefaultItem } from "../types";

const PopupContentDefaultItem: FC<IMainProductItem & IPopupContentDefaultItem> = ({
  info,
  weight,
  id,
  img,
  type,
  price,
  title,
  onClose,
}) => {
  return (
    <>
      <p className={cl.info}>{`${info} ${weight} г.`}</p>
      <ButtonAddBasket
        id={id}
        img={img}
        type={type}
        info={info}
        price={price}
        title={title}
        weight={weight}
        className={cl.add_basket}
        onClose={onClose}
      />
    </>
  );
};

export default memo(PopupContentDefaultItem);
