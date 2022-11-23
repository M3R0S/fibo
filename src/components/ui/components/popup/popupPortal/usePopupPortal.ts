import { useEffect, useState } from "react";
import cl from "./popupPortal.module.sass";

const usePopupPortal = () => {
  const [container] = useState<HTMLElement>(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);
    container.classList.add(cl.container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return {container};
};

export default usePopupPortal;
