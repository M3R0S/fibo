import { Navigate } from "react-router-dom";

import { PUBLIC_ROUTES, RoutesName } from "../constants/types";

import {
    BasketPageApp,
    ContactPageApp,
    ErrorPageApp,
    MainPageApp,
    MainProductPopupApp,
    PromotionPageApp,
    PromotionPopupApp,
} from "components/pages";

export const PUBLIC_ROUTES: PUBLIC_ROUTES[] = [
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
        elementChildren: <MainProductPopupApp />,
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
