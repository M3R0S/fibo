import Contact from "../components/pages/assetsPage/contact/Contact";
import PromotionPageList from "../components/pages/assetsPage/promotionPage/PromotionPageList";
import PageApp from "../components/pages/PageApp";


export const publicRoutes = [
  { patch: "*", element: <PageApp /> },
  { patch: "/", element: <PageApp /> },
  { patch: "/main", element: <PageApp /> },
  { patch: "/contact", element: <Contact /> },
  { patch: "/promotion", element: <PromotionPageList /> },
];