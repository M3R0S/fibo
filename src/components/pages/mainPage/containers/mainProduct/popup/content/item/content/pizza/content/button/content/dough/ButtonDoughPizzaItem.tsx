import { FC } from "react";
import classNames from "classnames";

import cl from "./buttonDoughPizzaItem.module.scss";
import { IButtonDoughPizzaItem } from "./constants/types";

export const ButtonDoughPizzaItem: FC<IButtonDoughPizzaItem> = (props) => {
    const { id, children, setActive, active } = props;

    const isActiveDough = active === id;

    function onSetActive() {
        setActive(id);
    }

    return (
        <button
            className={isActiveDough ? classNames(cl.button_active, cl.button) : cl.button}
            onClick={onSetActive}
        >
            {children}
        </button>
    );
};
