import { useState, MouseEvent } from "react";
import { IMainProductList } from "store/slice/mainProduct/types";
import { useAppDispatch } from "hook/useStore/useStore";
import { useNavigate } from "react-router-dom";
import { postBasketItem } from "store/slice/basketPage/basketPageSlice";

const useMainProductItem = ({ id, img, info, price, title, type, weight }: IMainProductList) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [basketAddInfo, setBasketAddInfo] = useState<string>("В корзину");
  const [isBasketAdd, setIsBasketAdd] = useState<boolean>(false);

  function onOpenPopup() {
    navigate(`${type}/${id}/info`);
  }

  function buttonAddBasket() {
    dispatch(
      postBasketItem({
        id: type + id + price + weight,
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
    setBasketAddInfo("Добавлено");
    setIsBasketAdd(true);
    setTimeout(() => {
      setBasketAddInfo("В корзину");
      setIsBasketAdd(false);
    }, 3000);
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

  return { buttonClickHandler, onOpenPopup, basketAddInfo, isBasketAdd };
};

export default useMainProductItem;
