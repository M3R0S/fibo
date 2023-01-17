import { FC } from "react";

import cl from "./button.module.scss";
import { classNames } from "utils";
import { ButtonProps } from ".";
import { buttonAccordance } from ".";

export const Button: FC<ButtonProps> = (props) => {
    const { children, className, variant } = props;

    const { variantClassName } = buttonAccordance[variant];

    return (
        <button
            {...props}
            className={classNames(
                cl.button_root,
                cl[variantClassName],
                className
            )}
        >
            {children}
        </button>
    );
};
