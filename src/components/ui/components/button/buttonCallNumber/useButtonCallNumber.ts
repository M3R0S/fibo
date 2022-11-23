import { useState } from "react";

const useButtonCallNumber = () => {
  const number = "7 978 779-08-23";
  const [text, setText] = useState(number);

  function clickHandlerText() {
    navigator.clipboard.writeText("79787790823");
    setText("Номер скопирован");
    setTimeout(() => {
      setText(number);
    }, 3000);
  }

  return {text, clickHandlerText};
};

export default useButtonCallNumber;
