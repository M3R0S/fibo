import { FC, memo } from "react";
import cl from "../../../../../../assets/styles/pages/mainPage/mainProduct/popup/mainProductPopup.module.sass";
import { TMainProductItem } from "../../../../../../store/slice/mainProduct/types/mainProductTypes";
import ButtonAddBasket from "../../../../../ui/components/button/buttonAddBasket/ButtonAddBasket";

interface IPopupContentDefaultItem {
  onClose: () => void;
}

const PopupContentDefaultItem: FC<
  TMainProductItem & IPopupContentDefaultItem
> = ({ info, weight, id, img, type, price, title, onClose }) => {
  return (
    <>
      <p className={cl.product_info}>{info + " " + weight + " г."}</p>
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
