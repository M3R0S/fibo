import { FC, memo } from "react";
import { useAppSelector } from "../../../../../hook/useStore/useStore";
import cl from "./buttonBasket.module.sass";
import CountUp from "react-countup";
import { IButtonBasket } from "./types";
import useButtonBasket from "./useButtonBasket";

const ButtonBasket: FC<IButtonBasket> = ({ className }) => {
  const { totalPrice } = useAppSelector((state) => state.basketPage);
  const { clickHandlerGoBasket } = useButtonBasket();

  return (
    <button
      type="button"
      className={[cl.basket_root, className].join(" ")}
      onClick={clickHandlerGoBasket}
    >
      {totalPrice ? (
        <CountUp
          className={cl.price}
          separator=" "
          preserveValue={true}
          end={totalPrice}
          duration={0.5}
          suffix={" ₽"}
          prefix={"Корзина | "}
        />
      ) : (
        "Корзина"
      )}
    </button>
  );
};

export default memo(ButtonBasket);
