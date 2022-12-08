import { FC } from "react";
import classNames from "classnames";

import cl from "./buttonClosePopup.module.scss";
import { IButtonClosePopup } from "../types";

import close from "assets/icons/ui/close.png";

export const ButtonClosePopup: FC<IButtonClosePopup> = ({ onClose, className }) => {
    return (
        <button onClick={onClose} className={classNames(cl.close_root, className)}>
            <img className={cl.close_img} src={close} alt="Закрыть" />
        </button>
    );
};
