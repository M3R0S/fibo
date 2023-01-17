import { ReactNode } from "react";

export interface PUBLIC_ROUTES {
    patch: string;
    element: ReactNode;
    patchChildren?: string;
    elementChildren?: ReactNode;
}

export enum RoutesName {
    START = "/",
    ALL = "*",
    ERROR_PAGE = "/error",
    APP_PAGE = "/main",
    APP_PAGE_POPUP = "/main/:type/:id/info",
    PROMOTION_PAGE = "/promotion",
    PROMOTION_PAGE_POPUP = ":id/info",
    CONTACT_PAGE = "/contact",
    BASKET_PAGE = "/basket",
    DRINK_PAGE = "/drink",
    DESERT_PAGE = "/desert",
    BAKALY_PAGE = "/bakaly",
    ANTIPASTY_PAGE = "/antipasty",
    COMBO_PAGE = "/combo",
}
