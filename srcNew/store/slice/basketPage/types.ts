export interface BasketPageSlice {
    list: BasketItem[];
    totalPrice: number;
    promoCodeRatio: number;
    promoCodeActive: boolean | null;
}

export interface BasketItem {
    id: string;
    typeProduct: string;
    idProduct: string;
    quantity: number;
    title: string;
    info: string;
    price: string;
    img: string;
    weight: string;
    dough?: string;
    size?: string;
}
