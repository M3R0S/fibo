import { FC, useState, memo } from "react";
import cl from "./buttonCallNumber.module.sass";

interface IButtonCallNumber {
  className?: string;
}

const ButtonCallNumber: FC<IButtonCallNumber> = ({ className }) => {
  const number = "7 978 779-08-23";
  const [text, setText] = useState(number);

  function clickHandlerText() {
    navigator.clipboard.writeText("79787790823");
    setText("Номер скопирован");
    setTimeout(() => {
      setText(number);
    }, 3000);
  }

  return (
    <button
      onClick={clickHandlerText}
      className={[cl.call_number_root, className].join(" ")}
    >
      {text}
    </button>
  );
};

export default memo(ButtonCallNumber);
