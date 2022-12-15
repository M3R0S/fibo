import { IMainProductItem } from "store/slice/constants/types";

export interface IButtonAddInBasket extends IUseAddInBasket {
    className?: string;
    isPopup: boolean;
}

export interface IUseAddInBasket extends IMainProductItem {
    onClose?: () => void;
    size?: string;
    dough?: string;
}
