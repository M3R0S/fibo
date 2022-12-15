import { FC } from "react";
import classNames from "classnames";

import cl from "./buttonSizePizzaItem.module.scss";
import { IButtonSizePizzaItem } from "./constants/types";

export const ButtonSizePizzaItem: FC<IButtonSizePizzaItem> = (props) => {
    const { id, children, active, setActive } = props;

    const isActiveSize = active === id;

    function onSetActive() {
        setActive(id);
    }

    return (
        <button
            onClick={onSetActive}
            className={isActiveSize ? classNames(cl.button_active, cl.button) : cl.button}
        >
            {children}
        </button>
    );
};
