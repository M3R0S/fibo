import { FC } from "react";
import cl from "./buttonOrderCall.module.sass";
import { IButtonOrderCall } from "./types";

const ButtonOrderCall: FC<IButtonOrderCall> = ({ className }) => {
  return (
    <button className={[cl.order_call_root, className].join(" ")} type="button">
      Заказать звонок
    </button>
  );
};

export default ButtonOrderCall;
