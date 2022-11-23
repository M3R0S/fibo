import { FC } from "react";
import cl from "./basketPageItemControl.module.sass";
import CountUp from "react-countup";
import { TBasketPageItemControl } from "./types";
import useBasketPageItemControl from "./useBasketPageItemControl";

interface IBasketPageItemControl {
  price: string;
  onDeleteBasketElement: () => void;
}

const BasketPageItemControl: FC<TBasketPageItemControl & IBasketPageItemControl> = ({
  id,
  quantity,
  price,
  onDeleteBasketElement,
}) => {
  const { decrement, increment, onChange, inputRef, onClickSelect } = useBasketPageItemControl({
    id,
    quantity,
  });

  return (
    <div className={cl.control}>
      <CountUp
        className={cl.price}
        separator=" "
        preserveValue={true}
        end={Number(price) * quantity}
        duration={0.5}
        suffix={" ₽"}
      />
      <div className={cl.quantity}>
        <button onClick={decrement}>-</button>
        <input type="text" value={quantity} onChange={onChange} ref={inputRef} onClick={onClickSelect} />
        <button onClick={increment}>+</button>
      </div>
      <button onClick={onDeleteBasketElement} className={cl.delete}></button>
    </div>
  );
};

export default BasketPageItemControl;
