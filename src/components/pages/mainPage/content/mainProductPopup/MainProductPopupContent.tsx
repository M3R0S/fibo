import { FC } from "react";
import cl from "./mainProductPopupContent.module.sass";
import { IMainProductItem } from "store/slice/mainProduct/types";
import PopupContentPizzaItem from "./pizzaItem/PopupContentPizzaItem";
import PopupContentDefaultItem from "./defaultItem/PopupContentDefaultItem";
import { IMainProductPopupContent } from "./types";
import ButtonClosePopup from "components/ui/components/button/buttonClosePopup/ButtonClosePopup";

const MainProductPopupContent: FC<IMainProductItem & IMainProductPopupContent> = (content) => {
  const { title, img, onClose, type } = content;

  return (
    <article className={cl.content}>
      <img className={cl.content_img} src={img} alt="Продукт" />
      <main className={cl.main}>
        <h1>{title}</h1>
        {type === "pizza" ? (
          <PopupContentPizzaItem {...content} />
        ) : (
          <PopupContentDefaultItem {...content} />
        )}
      </main>
      <ButtonClosePopup className={cl.close} onClose={onClose} />
    </article>
  );
};

export default MainProductPopupContent;
