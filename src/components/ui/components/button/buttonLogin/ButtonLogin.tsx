import { useAppSelector } from "hook/useStore/useStore";
import { FC } from "react";
import cl from "./buttonLogin.module.sass";
import { IButtonLogin } from "./types";
import useButtonLogin from "./useButtonLogin";

const ButtonLogin: FC<IButtonLogin> = ({ className }) => {
  const { onOpen } = useButtonLogin();
  const { isAuthorized } = useAppSelector((state) => state.user);

  return (
    <button onClick={onOpen} className={[cl.login_root, className].join(" ")}>
      {isAuthorized ? "Выйти" : "Войти"}
    </button>
  );
};

export default ButtonLogin;
