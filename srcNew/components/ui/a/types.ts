import { HTMLAttributeAnchorTarget, HTMLAttributes } from "react";
import { AccordanceVariantClassName } from "utils/types";

type AVariant = "HeaderDeliveryInfo";

export interface AProps extends HTMLAttributes<HTMLAnchorElement> {
    variant: AVariant;
}

interface AAccordanceVariant {
    src: string
    target?: HTMLAttributeAnchorTarget
}

export interface AAccordance {
    HeaderDeliveryInfo: AAccordanceVariant
}