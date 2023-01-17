import { HTMLAttributes } from "react";

type ButtonVariant = "NavigateHome" | "OrderCall" | "CallNumber" | "NavLink";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
}

interface ButtonVariantParams {
    variantClassName: string
}

export type ButtonAccordance = Record<ButtonVariant, ButtonVariantParams>
