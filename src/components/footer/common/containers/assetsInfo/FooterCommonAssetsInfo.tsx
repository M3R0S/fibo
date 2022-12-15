import { FC } from "react";

import cl from "./footerCommonAssetsInfo.module.scss";
import { IFooterCommonAssetsInfo } from "./constants/types";

import { LinkBlank } from "components/ui";

export const FooterCommonAssetsInfo: FC<IFooterCommonAssetsInfo> = ({ classNameWrapper }) => {
    return (
        <header className={classNameWrapper}>
            <LinkBlank href="/" className={cl.link}>
                Калорийность и состав
            </LinkBlank>
            <LinkBlank href="/" className={cl.link}>
                Правовая информация
            </LinkBlank>
        </header>
    );
};
