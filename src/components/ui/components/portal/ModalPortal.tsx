import { FC, useState, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";
import "../../../../assets/styles/index.sass";

interface IModalPortal {
  children: ReactNode;
  className: string;
}

const ModalPortal: FC<IModalPortal> = ({ children, className }) => {
  const [container] = useState<HTMLElement>(() =>
    document.createElement("div")
  );

  useEffect(() => {
    document.body.appendChild(container);
    container.classList.add("popup");
    container.classList.add(className);
    return () => {
      document.body.removeChild(container);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default ModalPortal;
