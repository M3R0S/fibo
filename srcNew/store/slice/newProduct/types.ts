import { SectionName } from "utils/types";

export interface NewProductItem {
    type: SectionName;
    id: string;
    title: string;
    price: string;
    img: string;
}