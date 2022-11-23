import { FC, memo } from "react";
import cl from "./buttonAddBasket.module.sass";
import CountUp from "react-countup";
import { IButtonAddBasket } from "./types";
import useButtonAddBasket from "./useButtonAddBasket";

const ButtonAddBasket: FC<IButtonAddBasket> = ({
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
  const { productAdd, setPostBasketItem } = useButtonAddBasket({
    id,
    img,
    info,
    onClose,
    price,
    title,
    type,
    weight,
    dough,
    size,
  });

  return (
    <button onClick={setPostBasketItem} className={[cl.add_basket_root, className].join(" ")}>
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
