import { FC, useState, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";
import cl from "./popup.module.sass";

interface IPopupPortal {
  children: ReactNode;
}

const PopupPortal: FC<IPopupPortal> = ({ children }) => {
  const [container] = useState<HTMLElement>(() =>
    document.createElement("div")
  );

  useEffect(() => {
    document.body.appendChild(container);
    container.classList.add(cl.container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
};

export default PopupPortal;
