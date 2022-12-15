import { FC } from "react";

import cl from "./footerCommonCopyright.module.scss";
import { IFooterCommonCopyright } from "./constants/types";

export const FooterCommonCopyright: FC<IFooterCommonCopyright> = ({
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
