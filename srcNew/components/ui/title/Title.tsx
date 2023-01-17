import { FC } from "react";

import { TitleProps, TitleTagAccordance } from "./types";

export const Title: FC<TitleProps> = (props) => {
    const { children, tag } = props;

    const titleTagAccordance: TitleTagAccordance = {
        h1: <h1 {...props}>{children}</h1>,
        h2: <h2 {...props}>{children}</h2>,
        h3: <h3 {...props}>{children}</h3>,
        h4: <h4 {...props}>{children}</h4>,
        h5: <h5 {...props}>{children}</h5>,
        h6: <h6 {...props}>{children}</h6>,
    };

    const correctTag = titleTagAccordance[tag];

    return correctTag;
};
