import { HTMLAttributes, ReactElement } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
    tag: ContainerTag
}

type ContainerTag = "section" | "header" | "main" | "footer" | "nav"

export type ContainerAccordance = Record<ContainerTag, ReactElement<HTMLElement>>