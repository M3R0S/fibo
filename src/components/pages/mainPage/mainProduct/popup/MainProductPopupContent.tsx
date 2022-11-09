import { FC } from "react";
import cl from "../../../../../assets/styles/pages/mainPage/mainProduct/popup/mainProductPopup.module.sass";
import close from "../../../../../assets/image/main-product/close.png";
import { TMainProductItem } from "../../../../../store/slice/mainProduct/types/mainProductTypes";
import PopupContentPizzaItem from "./pizzaItem/PopupContentPizzaItem";
import PopupContentDefaultItem from "./defaultItem/PopupContentDefaultItem";

interface IMainProductPopupContent {
  onClose: () => void;
}

const MainProductPopupContent: FC<
  TMainProductItem & IMainProductPopupContent
> = (content) => {
  const { title, img, onClose, type } = content;

  return (
    <article className={cl.content}>
      <img className={cl.product_img} src={img} alt={`Modal img: ${img}`} />
      <div className={cl.main_info}>
        <h1>{title}</h1>
        {type === "pizza" ? (
          <PopupContentPizzaItem {...content} />
        ) : (
          <PopupContentDefaultItem {...content} />
        )}
      </div>
      <button onClick={onClose} className={cl.close}>
        <img src={close} alt="Закрыть" />
      </button>
    </article>
  );
};

export default MainProductPopupContent;
