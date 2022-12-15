import { TPizzaSize } from "store/slice/constants/types";

export interface IButtonSizePizzaItem {
    id: TPizzaSize;
    children: string;
    active: TPizzaSize;
    setActive: (id: TPizzaSize) => void;
}
