import { TPizzaDough } from "store/slice/constants/types";

export interface IButtonDoughPizzaItem {
    id: TPizzaDough;
    children: string;
    setActive: (dough: TPizzaDough) => void;
    active: TPizzaDough;
}