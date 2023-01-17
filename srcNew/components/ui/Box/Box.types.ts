import { HTMLAttributes, ReactElement } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    tag: BoxTag
}

type BoxTag = "div" | "article" | "figure"

export type BoxAccordance = Record<BoxTag, ReactElement<HTMLElement>>