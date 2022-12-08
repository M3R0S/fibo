import { FC } from "react";
import cl from "./error.module.scss";
import { IError } from "../types";
import classNames from "classnames";

export const Error: FC<IError> = ({ className, children = "Ошибка", isPopup = false, onClose }) => {
    return (
        <div className={classNames(cl.container_root, className)}>
            <h1>{children}</h1>
            {isPopup && <button onClick={onClose}>Закрыть</button>}
        </div>
    );
};
