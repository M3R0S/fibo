import { FC, memo } from "react";
import cl from "./buttonHome.module.sass";
import { IButtonHome } from "./types";
import useButtonHome from "./useButtonHome";

const ButtonHome: FC<IButtonHome> = ({ children, className }) => {
  const { clickHandlerGoHome } = useButtonHome();

  return (
    <button
      className={[cl.button_home_root, className].join(" ")}
      type="button"
      onClick={clickHandlerGoHome}
    >
      {children}
    </button>
  );
};

export default memo(ButtonHome);
