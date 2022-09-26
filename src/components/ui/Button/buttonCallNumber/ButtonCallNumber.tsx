import React, { FC, useState } from "react";
import cl from "./buttonCallNumber.module.sass";

interface IButtonCallNumber {
  className?: string;
}

const ButtonCallNumber: FC<IButtonCallNumber> = ({ className }) => {
  const [text, setText] = useState("7 978 779-08-23");
  return (
    <button
      onClick={(e) => {
        navigator.clipboard.writeText("79787790823");
        setText("Номер скопирован");
        setTimeout(() => {
          setText("7 978 779-08-23");
        }, 3000);
      }}
      className={`${cl.call_number_root} ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonCallNumber;
