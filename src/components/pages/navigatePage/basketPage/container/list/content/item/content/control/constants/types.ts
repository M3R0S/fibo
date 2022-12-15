export interface IBasketPageItemControl extends IUseChangeItemQuantity {
    price: string;
    onDeleteBasketElement: () => void;
}

export interface IUseChangeItemQuantity {
    quantity: number;
    id: string;
}
