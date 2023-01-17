import { ReactElement, HTMLAttributes } from "react";

type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps extends HTMLAttributes<HTMLHeadElement> {
    tag: TitleTag;
}

export type TitleTagAccordance = {
    [key in TitleTag]: ReactElement<HTMLHeadingElement>
}
