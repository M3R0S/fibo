import { FC, MouseEvent, useState } from "react";
import cl from "../../../../../assets/styles/pages/mainPage/mainProduct/page/mainProduct.module.sass";
import { useNavigate } from "react-router-dom";
import { TMainProductList } from "../../../../../store/slice/mainProduct/types/mainProductTypes";
import { useAppDispatch } from "../../../../../hook/storeHook/useStore";
import { v4 as uuid } from "uuid";
import { postBasketItem } from "../../../../../store/slice/basketPageSlice";

const MainProductItem: FC<TMainProductList> = ({
  id,
  title,
  info,
  price,
  img,
  type,
  weight,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isBasketAdd, setIsBasketAdd] = useState<boolean>(false);

  function onOpenPopup() {
    navigate(`${type}/${id}/info`);
  }

  function buttonAddBasket() {
    dispatch(
      postBasketItem({
        id: uuid(),
        typeProduct: type,
        idProduct: id,
        title,
        info,
        img,
        weight,
        price,
        quantity: 1,
      })
    );
    setIsBasketAdd(true);
    setTimeout(() => setIsBasketAdd(false), 3000);
  }

  function buttonClickHandler(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (type === "pizza") {
      return onOpenPopup();
    }
    if (!isBasketAdd) {
      return buttonAddBasket();
    }
  }

  return (
    <article onClick={onOpenPopup} className={cl.group_item}>
      <header className={cl.header_info}>
        <img src={img} alt="Изображение продукта" />
        <div className={cl.header_title}>
          <h2>{title}</h2>
        </div>
        <p>
          {info.length > 150 ? info.substring(0, 150) + "..." : info}{" "}
          {type !== "pizza" ? weight + "г." : ""}
        </p>
      </header>
      <main className={cl.footer_info}>
        <strong>{`${type === "pizza" ? "от" : ""} ${price} ₽`}</strong>
        <button
          onClick={buttonClickHandler}
          className={
            isBasketAdd ? [cl.basket_disabled, cl.basket].join(" ") : cl.basket
          }
        >
          {type === "pizza"
            ? "Открыть"
            : isBasketAdd
            ? "Добавлено"
            : "В корзину"}
        </button>
      </main>
    </article>
  );
};

export default MainProductItem;
