import { FC } from "react";

import cl from "./copyright.module.scss";
import { IFooterConstantsChildren, IFooterConstantsClassName } from "../types";

export const Copyright: FC<IFooterConstantsClassName & IFooterConstantsChildren> = ({
    classNameWrapper,
    children,
}) => {
    return (
        <footer className={classNameWrapper}>
            <b className={cl.info}>Fibo Все праав защищены © 2022</b>
            {children}
        </footer>
    );
};
