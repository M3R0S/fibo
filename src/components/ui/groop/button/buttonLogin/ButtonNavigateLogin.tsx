import { FC } from "react";
import classNames from "classnames";

import cl from "./buttonLogin.module.scss";
import { useNavigateLogin } from "./useNavigateLogin";
import { IButtonNavigateLogin } from "../types";

export const ButtonNavigateLogin: FC<IButtonNavigateLogin> = ({ className }) => {
    const { navigateLogin } = useNavigateLogin();

    return (
        <button onClick={navigateLogin} className={classNames(cl.login_root, className)}>
            Войти
        </button>
    );
};
