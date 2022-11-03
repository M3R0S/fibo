import React, { FC } from "react";
import cl from "./error.module.sass";

interface IError {
  className?: string;
  children?: string;
  isPopup?: boolean;
  onClose?: () => void;
}

const Error: FC<IError> = ({ className, children = 'Ошибка', isPopup = false, onClose }) => {
  return (
    <div className={[cl.container_root, className].join(" ")}>
      <h1>{children}</h1>
      {isPopup && <button onClick={onClose}>Закрыть</button>}
    </div>
  );
};

export default Error;
