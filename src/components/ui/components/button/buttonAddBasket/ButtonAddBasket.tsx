import { FC, memo, useState } from "react";
import { useAppDispatch } from "../../../../../hook/storeHook/useStore";
import { postBasketItem } from "../../../../../store/slice/basketPageSlice";
import cl from "./buttonAddBasket.module.sass";
import CountUp from "react-countup";
import { v4 as uuid } from "uuid";

interface ITMainProductItemModal {
  type: string;
  id: string;
  title: string;
  info: string;
  img: string;
  weight: string;
  price: string;
  dough?: string;
  size?: string;
  className?: string;
  onClose: () => void;
}

const ButtonAddBasket: FC<ITMainProductItemModal> = ({
  id,
  img,
  info,
  price,
  title,
  type,
  dough,
  size,
  weight,
  className,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [productAdd, setProductAdd] = useState<boolean>(false);

  function onSetProductAdd() {
    setProductAdd(true);
    setTimeout(() => setProductAdd(false), 3000);
  }

  function setPostBasketItem() {
    dispatch(
      postBasketItem({
        id: uuid(),
        typeProduct: type,
        idProduct: id,
        title,
        info,
        img,
        dough,
        size,
        weight,
        price,
        quantity: 1,
      })
    );
    onSetProductAdd();
    onClose();
  }

  return (
    <button
      onClick={setPostBasketItem}
      className={[cl.add_basket_root, className].join(" ")}
    >
      {productAdd ? (
        "Товар успешно добавлен!"
      ) : (
        <CountUp
          end={Number(price)}
          separator=" "
          duration={0.5}
          preserveValue
          prefix="Добавить в корзину | "
          suffix=" ₽"
        />
      )}
    </button>
  );
};

export default memo(ButtonAddBasket);
