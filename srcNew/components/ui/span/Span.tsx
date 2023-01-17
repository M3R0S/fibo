import { FC } from "react";

import { SpanProps } from "./types";

export const Span: FC<SpanProps> = (props) => {
    const { children } = props;

    return <span {...props}>{children}</span>;
};
