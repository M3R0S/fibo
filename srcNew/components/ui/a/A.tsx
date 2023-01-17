import { FC } from "react";

import { aAccordance } from "./const";
import { AProps } from "./types";

export const A: FC<AProps> = (props) => {
    const { children, variant } = props;

    const { src, target } = aAccordance[variant];

    return (
        <a {...props} href={src} target={target}>
            {children}
        </a>
    );
};
