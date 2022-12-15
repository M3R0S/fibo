import { FC } from "react";
import classNames from "classnames";

import cl from "./buttonClosePopup.module.scss";
import { IButtonClosePopup } from "./constants/types";
import { CLOSE } from "./constants/const";

export const ButtonClosePopup: FC<IButtonClosePopup> = (props) => {
    const { onClose, className } = props;

    const { ALT, SRC } = CLOSE;

    return (
        <button onClick={onClose} className={classNames(cl.close_root, className)}>
            <img className={cl.close_img} src={SRC} alt={ALT} />
        </button>
    );
};
