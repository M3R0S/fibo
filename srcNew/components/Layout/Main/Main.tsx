import { FC } from "react";

import cl from "./Main.module.scss";
import { MainProps } from ".";

export const Main: FC<MainProps> = (props) => {
    const { children } = props;

    return <main>{children}</main>;
};
