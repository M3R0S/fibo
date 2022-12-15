export interface IBasketPageItemInfo extends IUseExactlyInfo {
    weight: string;
    typeProduct: string;
    title: string;
    img: string;
    dough?: string;
    size?: string;
}

export interface IUseExactlyInfo {
    info: string;
}
