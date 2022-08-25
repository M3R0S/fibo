import PageApp from "../components/pages/PageApp";


export const publicRoutes = [
  { patch: "/", element: <PageApp /> },
  { patch: "/main", element: <PageApp /> },
  { patch: "*", element: <PageApp /> },
];