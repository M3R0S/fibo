import { FC } from "react";
import classNames from "classnames";

import cl from "./loader.module.scss";
import { ILoader } from "./constants/types";
import { LOADER } from "./constants/const";

export const Loader: FC<ILoader> = ({ className }) => {
    const { ALT, SRC } = LOADER;

    return (
        <div className={classNames(cl.loader_container_root, className)}>
            <img className={cl.loader_root} src={SRC} alt={ALT} />
        </div>
    );
};
