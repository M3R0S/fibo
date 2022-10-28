import React from "react";
import BasketPageList from "../components/pages/assetsPage/basketPage/BasketPageList";
import Contact from "../components/pages/assetsPage/contact/Contact";
import ErrorPage from "../components/pages/assetsPage/errorPage/ErrorPage";
import PromotionPageApp from "../components/pages/assetsPage/promotionPage/page/PromotionPageApp";
import PageApp from "../components/pages/mainPage/PageApp";

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
  BASKET_PAGE = "/basket",
}

export const publicRoutes: IRoutes[] = [
  { patch: RoutesName.ALL, element: <ErrorPage /> },
  { patch: RoutesName.START, element: <PageApp /> },
  { patch: RoutesName.APP_PAGE, element: <PageApp /> },
  { patch: RoutesName.CONTACT_PAGE, element: <Contact /> },
  { patch: RoutesName.PROMOTION_PAGE, element: <PromotionPageApp /> },
  { patch: RoutesName.ERROR_PAGE, element: <ErrorPage /> },
  { patch: RoutesName.BASKET_PAGE, element: <BasketPageList /> },
];
