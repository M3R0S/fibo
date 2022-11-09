import { Navigate } from "react-router-dom";
import MainPageApp from "../components/pages/mainPage/MainPageApp";
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
  APP_PAGE_POPUP = "/main/:type/:id/info",
  CONTACT_PAGE = "/contact",
  PROMOTION_PAGE = "/promotion",
  PROMOTION_PAGE_POPUP = "/promotion/:id/info",
  BASKET_PAGE = "/basket",
}

export const publicRoutes: IRoutes[] = [
  { patch: RoutesName.ALL, element: <ErrorPage /> },
  {
    patch: RoutesName.START,
    element: <Navigate to={RoutesName.APP_PAGE} replace />,
  },
  { patch: RoutesName.APP_PAGE, element: <MainPageApp /> },
  {
    patch: RoutesName.APP_PAGE_POPUP,
    element: <MainPageApp isOpenPopup={true} />,
  },
  { patch: RoutesName.CONTACT_PAGE, element: <Contact /> },
  {
    patch: RoutesName.PROMOTION_PAGE,
    element: <PromotionPageApp />,
  },
  {
    patch: RoutesName.PROMOTION_PAGE_POPUP,
    element: <PromotionPageApp isOpenPopup={true} />,
  },
  { patch: RoutesName.ERROR_PAGE, element: <ErrorPage /> },
  { patch: RoutesName.BASKET_PAGE, element: <BasketPageList /> },
];
