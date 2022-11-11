import { FC } from "react";
import cl from "./buttonOrderCall.module.sass";

interface IButtonOrderCall {
  className?: string;
}

const ButtonOrderCall: FC<IButtonOrderCall> = ({ className }) => {
  return (
    <button className={[cl.order_call_root, className].join(" ")} type="button">
      Заказать звонок
    </button>
  );
};

export default ButtonOrderCall;
