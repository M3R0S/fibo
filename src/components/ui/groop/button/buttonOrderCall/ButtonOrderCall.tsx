import { FC } from "react";
import classNames from "classnames";

import cl from "./buttonOrderCall.module.scss";
import { IButtonOrderCall } from "../types";

export const ButtonOrderCall: FC<IButtonOrderCall> = ({ className }) => {
    return (
        <button className={classNames(cl.order_call_root, className)} type="button">
            Заказать звонок
        </button>
    );
};
