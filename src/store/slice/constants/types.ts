//? State

export interface IBasketPageSlice {
    list: IBasketItem[];
    totalPrice: number;
    promoCodeRatio: number;
    promoCodeActive: boolean | null;
}

export interface IGlobalSlice {
    globalScreenWidth: number | null;
}

export interface ILoginSlice {
    isLogin: boolean;
    isAuthorized: boolean
}

export interface IUserSlice {
    user: IUser;
}

export interface IMainProductSlice {
    isIntersectingMainProduct: boolean;
    endLoadingMainProduct: IEndLoadingMainProduct;
    isEndLoadingMainProduct: boolean;
}

export interface INavbarSlice {
    navbarLinkActive: string | null;
    openNavbarBurger: boolean;
}

//? Basket

export interface IBasketItem {
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

//? Login

export interface IUser {
    id: string | null;
    email: string | null;
    password: string | null;
}

export interface ILoginUserQuery {
    email: string;
}

//? MainProduct

export type TSectionName = "pizza" | "pasta" | "soup" | "salad";
export type TPizzaDough = "classic" | "slim";
export type TPizzaSize = "small" | "medium" | "big";
export type TMainProductQueryParams = TSectionName;

export interface IMainProductItem {
    id: string;
    type: TSectionName;
    title: string;
    info: string;
    img: string;
    price: string;
    weight: string;
}

export interface IMainProductPizzaItem extends IMainProductItem {
    weightSmall: string;
    weightMedium: string;
    weightBig: string;
    sizeSmall: string;
    sizeMedium: string;
    sizeBig: string;
    priceSmall: string;
    priceMedium: string;
    priceBig: string;
}

export interface IEndLoadingMainProduct {
    pizza: boolean;
    pasta: boolean;
    soup: boolean;
    salad: boolean;
}

//? NewProduct

export interface INewProductItem {
    type: TSectionName;
    id: string;
    title: string;
    price: string;
    img: string;
}

//? PromotionPage

export interface IPromotionContent {
    id: string;
    img: string;
    title: string;
    info: string;
}

//? Common

export interface IPopupQueryParams {
    popupId: string | null;
    popupType?: string | null;
}
