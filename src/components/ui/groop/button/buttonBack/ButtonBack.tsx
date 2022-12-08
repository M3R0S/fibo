import { FC } from "react";
import classNames from "classnames";

import cl from "./buttonBack.module.scss";
import { IButtonBack } from "../types";

import { useGoBack } from "hook";

export const ButtonBack: FC<IButtonBack> = ({ children, className }) => {
    const { goBack } = useGoBack();

    return (
        <button onClick={goBack} className={classNames(cl.back_root, className)}>
            {children}
        </button>
    );
};
