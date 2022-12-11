import { FC } from "react";

import cl from "./assetsInfo.module.scss";
import { IFooterConstantsClassName } from "../types";

import { LinkBlank } from "components/ui";

export const AssetsInfo: FC<IFooterConstantsClassName> = ({ classNameWrapper }) => {
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
