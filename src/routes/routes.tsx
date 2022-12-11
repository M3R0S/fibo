import { Navigate } from "react-router-dom";
import MainPageApp from "components/pages/mainPage/app/MainPageApp";
import BasketPageApp from "components/pages/navigatePage/basketPage/app/BasketPageApp";
import ContactPageApp from "components/pages/navigatePage/contactPage/app/ContactPageApp";
import ErrorPageApp from "components/pages/navigatePage/errorPage/app/ErrorPageApp";
import PromotionPageApp from "components/pages/navigatePage/promotionPage/page/app/PromotionPageApp";
import { IRoutes, RoutesName } from "./types";
import PromotionPopupApp from "components/pages/navigatePage/promotionPage/popup/app/PromotionPopupApp";
import MainProductPopupApp from "components/pages/mainPage/mainProduct/popup/mainProductPopupApp/MainProductPopupApp";

export const publicRoutes: IRoutes[] = [
    {
        patch: RoutesName.START,
        element: <Navigate to={RoutesName.APP_PAGE} replace />,
    },
    { patch: RoutesName.ALL, element: <ErrorPageApp /> },
    { patch: RoutesName.ERROR_PAGE, element: <ErrorPageApp /> },
    { patch: RoutesName.DESERT_PAGE, element: <ErrorPageApp /> },
    { patch: RoutesName.BAKALY_PAGE, element: <ErrorPageApp /> },
    { patch: RoutesName.ANTIPASTY_PAGE, element: <ErrorPageApp /> },
    { patch: RoutesName.COMBO_PAGE, element: <ErrorPageApp /> },
    {
        patch: RoutesName.APP_PAGE,
        element: <MainPageApp />,
        patchChildren: RoutesName.APP_PAGE_POPUP,
        elementChildren: <MainProductPopupApp />
    },
    {
        patch: RoutesName.PROMOTION_PAGE,
        element: <PromotionPageApp />,
        patchChildren: RoutesName.PROMOTION_PAGE_POPUP,
        elementChildren: <PromotionPopupApp />,
    },
    { patch: RoutesName.CONTACT_PAGE, element: <ContactPageApp /> },
    { patch: RoutesName.BASKET_PAGE, element: <BasketPageApp /> },
];
