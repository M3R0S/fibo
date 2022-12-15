import { TPizzaDough, TPizzaSize } from "store/slice/constants/types";

export interface IButtonPizzaApp {
    activeSize: TPizzaSize;
    setActiveSize: (activeSize: TPizzaSize) => void;
    activeDough: TPizzaDough;
    setActiveDough: (activeDough: TPizzaDough) => void;
}

export interface IPIZZA_SIZE_BUTTON_ARRAY {
    id: TPizzaSize;
    info: string;
}

export interface IPIZZA_DOUGH_BUTTON_ARRAY {
    id: TPizzaDough;
    info: string;
}