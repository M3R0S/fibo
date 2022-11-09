import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ patch, element }) => (
        <Route key={patch} path={patch} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
