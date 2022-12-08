import { FC } from "react";

import cl from "./copyright.module.scss";
import { IUiChildren, IUiClassName } from "../types";

export const Copyright: FC<IUiClassName & IUiChildren> = ({ classNameWrapper, children }) => {
    return (
        <footer className={classNameWrapper}>
            <b className={cl.info}>Fibo Все праав защищены © 2022</b>
            {children}
        </footer>
    );
};
