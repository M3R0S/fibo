import { FC } from "react";
import classNames from "classnames";

import cl from "./buttonLogin.module.scss";
import { useNavigateLogin } from "./logic";
import { IButtonNavigateLogin } from "./constants/types";

import { useAppSelector } from "store";

export const ButtonNavigateLogin: FC<IButtonNavigateLogin> = ({ className }) => {
    const { navigateLogin, logout } = useNavigateLogin();
    const { isAuthorized } = useAppSelector((state) => state.login);

    return (
        <button
            onClick={isAuthorized ? logout : navigateLogin}
            className={classNames(cl.login_root, className)}
        >
            {isAuthorized ? "Выйти" : "Войти"}
        </button>
    );
};
