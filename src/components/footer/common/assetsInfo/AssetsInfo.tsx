import { FC } from "react";

import cl from "./assetsInfo.module.scss";
import { IUiClassName } from "../types";

import { LinkBlank } from "components/ui";

export const AssetsInfo: FC<IUiClassName> = ({ classNameWrapper }) => {
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
