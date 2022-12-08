import { FC } from "react";
import classNames from "classnames";

import cl from "./buttonCallNumber.module.scss";
import { useChangeTextNumber } from "./useChangeTextNumber";
import { IButtonCallNumber } from "../types";

export const ButtonCallNumber: FC<IButtonCallNumber> = ({ className }) => {
    const { changeText, text } = useChangeTextNumber();

    return (
        <button onClick={changeText} className={classNames(cl.call_number_root, className)}>
            {text}
        </button>
    );
};
