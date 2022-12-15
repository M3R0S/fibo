import { IMainProductItem } from "store/slice/constants/types";

export interface IMainProductPopupDefaultItem extends IMainProductItem {
    onClose: () => void;
}