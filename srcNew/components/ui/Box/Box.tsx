import { FC } from "react";

import cl from "./Box.module.scss";
import { BoxProps, BoxAccordance } from ".";
import { classNames } from "utils";

export const Box: FC<BoxProps> = (props) => {
    const { children, className, tag } = props;

    const boxAccordance: BoxAccordance = {
        article: (
            <article
                {...props}
                className={classNames(cl.article_root, className)}
            >
                {children}
            </article>
        ),
        div: (
            <div {...props} className={classNames(cl.div_root, className)}>
                {children}
            </div>
        ),
        figure: (
            <figure
                {...props}
                className={classNames(cl.figure_root, className)}
            >
                {children}
            </figure>
        ),
    };

    const element = boxAccordance[tag];

    return element;
};
