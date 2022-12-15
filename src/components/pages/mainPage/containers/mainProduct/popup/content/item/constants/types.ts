import { ReactNode } from "react";
import { IMainProductPizzaItem } from "store/slice/constants/types";

export interface IMainProductPopupItem extends IMainProductPizzaItem {
    onClose: () => void;
}

export interface ITypeAccordance {
    pizza: ReactNode;
    pasta: ReactNode;
    soup: ReactNode;
    salad: ReactNode;
}
