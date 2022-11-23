import { FC } from "react";
import { IUiChildren, IUiClassName } from "../types";
import cl from "./copyright.module.sass";

const Copyright: FC<IUiClassName & IUiChildren> = ({ classNameWrapper, children }) => {
  return (
    <footer className={classNameWrapper}>
      <b className={cl.info}>Fibo Все праав защищены © 2022</b>
      {children}
    </footer>
  );
};

export default Copyright;
