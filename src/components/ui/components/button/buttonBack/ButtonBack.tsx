import useGoBack from "hook/useGoBack/useGoBack";
import { FC } from "react";
import cl from "./buttonBack.module.sass";
import { IButtonBack } from "./types";

const ButtonBack: FC<IButtonBack> = ({ children, className }) => {
  const { goBack } = useGoBack();

  return (
    <button onClick={goBack} className={[cl.back_root, className].join(" ")}>
      {children}
    </button>
  );
};

export default ButtonBack;
