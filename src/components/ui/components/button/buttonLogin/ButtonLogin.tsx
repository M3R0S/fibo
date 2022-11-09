import { FC } from "react";
import cl from "./buttonLogin.module.sass";

interface IButtonLogin {
  className?: string;
}

const ButtonLogin: FC<IButtonLogin> = ({ className }) => {
  return (
    <button type="button" className={`${cl.login_root} ${className}`}>
      Войти
    </button>
  );
};

export default ButtonLogin;
