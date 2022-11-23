import { FC } from "react";
import cl from "./buttonLogin.module.sass";
import { IButtonLogin } from "./types";

const ButtonLogin: FC<IButtonLogin> = ({ className }) => {
  return (
    <button type="button" className={[cl.login_root, className].join(" ")}>
      Войти
    </button>
  );
};

export default ButtonLogin;
