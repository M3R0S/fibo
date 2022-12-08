//? State

export interface IBasketPageSlice {
    list: IBasketItem[];
    totalPrice: number;
    promoCodeRatio: number;
    promoCodeActive: boolean | null;
}

export interface IGlobalSlice {
    isOpenedLoginPopup: boolean;
    globalIsIntersecting: boolean;
    screenWidth: number | null;
}

export interface IUserSlice {
    isLogin: boolean;
    user: IUser;
}

export interface IMainProductSlice {
    endLoadingProduct: IEndLoadingProduct;
    isEndLoadingProduct: boolean;
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

export interface IMainProductList {
    id: string;
    type: TSectionName;
    title: string;
    info: string;
    img: string;
    price: string;
    weight: string;
}

export interface IMainProductItem extends IMainProductList {
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

export interface IEndLoadingProduct {
    pizza: boolean;
    pasta: boolean;
    soup: boolean;
    salad: boolean;
}

//? Navbar

export interface INavbarItem {
    linkActive: string | null;
    openNavbarBurger: boolean;
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
