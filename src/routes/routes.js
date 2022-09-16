import Contact from "../components/pages/assetsPage/contact/Contact";
import ErrorPage from "../components/pages/assetsPage/errorPage/ErrorPage";
import PromotionPageList from "../components/pages/assetsPage/promotionPage/PromotionPageList";
import PageApp from "../components/pages/PageApp";

export const publicRoutes = [
  { patch: "*", element: <ErrorPage /> },
  { patch: "/", element: <PageApp /> },
  { patch: "/main", element: <PageApp /> },
  { patch: "/contact", element: <Contact /> },
  { patch: "/promotion", element: <PromotionPageList /> },
  { patch: "/error", element: <ErrorPage /> },
];
