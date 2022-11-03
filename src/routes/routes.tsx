import React from "react";
import PageApp from "../components/pages/mainPage/PageApp";
import BasketPageList from "../components/pages/navigatePage/basketPage/BasketPageList";
import Contact from "../components/pages/navigatePage/contactPage/Contact";
import ErrorPage from "../components/pages/navigatePage/errorPage/ErrorPage";
import PromotionPageApp from "../components/pages/navigatePage/promotionPage/page/PromotionPageApp";

export interface IRoutes {
  patch: string;
  element: JSX.Element;
}

export enum RoutesName {
  START = "/",
  ALL = "*",
  ERROR_PAGE = "/error",
  APP_PAGE = "/main",
  CONTACT_PAGE = "/contact",
  PROMOTION_PAGE = "/promotion",
  PROMOTION_PAGE_POPUP = "/promotion/:id/info",
  BASKET_PAGE = "/basket",
}

export const publicRoutes: IRoutes[] = [
  { patch: RoutesName.ALL, element: <ErrorPage /> },
  { patch: RoutesName.START, element: <PageApp /> },
  { patch: RoutesName.APP_PAGE, element: <PageApp /> },
  { patch: RoutesName.CONTACT_PAGE, element: <Contact /> },
  {
    patch: RoutesName.PROMOTION_PAGE,
    element: <PromotionPageApp isOpenPopup={false} />
  },
  {
    patch: RoutesName.PROMOTION_PAGE_POPUP,
    element: <PromotionPageApp isOpenPopup={true} />
  },
  { patch: RoutesName.ERROR_PAGE, element: <ErrorPage /> },
  { patch: RoutesName.BASKET_PAGE, element: <BasketPageList /> },
];
