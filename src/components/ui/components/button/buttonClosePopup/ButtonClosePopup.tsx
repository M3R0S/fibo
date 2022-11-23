import { FC } from "react";
import cl from "./buttonClosePopup.module.sass";
import close from "./image/close.png";
import { IButtonClosePopup } from "./types";

const ButtonClosePopup: FC<IButtonClosePopup> = ({ onClose, className }) => {
  return (
    <button onClick={onClose} className={[cl.close_root, className].join(" ")}>
      <img className={cl.close_img} src={close} alt="Закрыть" />
    </button>
  );
};

export default ButtonClosePopup;
