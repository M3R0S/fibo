import { FC } from "react";
import cl from "./buttonLogin.module.sass";
import { IButtonLogin } from "./types";
import useButtonLogin from "./useButtonLogin";

const ButtonLogin: FC<IButtonLogin> = ({ className }) => {
  const { onOpen } = useButtonLogin();

  return (
    <button onClick={onOpen} className={[cl.login_root, className].join(" ")}>
      Войти
    </button>
  );
};

export default ButtonLogin;
