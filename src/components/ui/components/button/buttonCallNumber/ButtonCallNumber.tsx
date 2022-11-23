import { FC, memo } from "react";
import cl from "./buttonCallNumber.module.sass";
import { IButtonCallNumber } from "./types";
import useButtonCallNumber from "./useButtonCallNumber";

const ButtonCallNumber: FC<IButtonCallNumber> = ({ className }) => {
  const { clickHandlerText, text } = useButtonCallNumber();

  return (
    <button onClick={clickHandlerText} className={[cl.call_number_root, className].join(" ")}>
      {text}
    </button>
  );
};

export default memo(ButtonCallNumber);
