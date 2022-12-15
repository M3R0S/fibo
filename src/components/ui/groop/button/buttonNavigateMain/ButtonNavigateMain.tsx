import { FC } from "react";
import classNames from "classnames";

import cl from "./buttonNavigateMain.module.scss";
import { useNavigateMain } from "./logic";
import { IButtonNavigateMain } from "./constants/types";

export const ButtonNavigateMain: FC<IButtonNavigateMain> = ({ children, className }) => {
    const { navigateMain } = useNavigateMain();

    return (
        <button
            className={classNames(cl.button_home_root, className)}
            type="button"
            onClick={navigateMain}
        >
            {children}
        </button>
    );
};
