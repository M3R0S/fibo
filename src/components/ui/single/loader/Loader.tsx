import { FC } from "react";
import loader from "./image/loader.gif";
import cl from "./loader.module.scss";
import { ILoader } from "../types";
import classNames from "classnames";

export const Loader: FC<ILoader> = ({ className }) => {
    return (
        <div className={classNames(cl.loader_container_root, className)}>
            <img className={cl.loader_root} src={loader} alt="Загрузка" />
        </div>
    );
};
