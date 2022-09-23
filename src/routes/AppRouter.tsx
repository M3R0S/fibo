import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { v4 as uuidv4 } from "uuid";
import ErrorPage from "../components/pages/assetsPage/errorPage/ErrorPage";

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ patch, element }) => (
        <Route key={uuidv4()} path={patch} element={element}></Route>
      ))}
    </Routes>
  );
};

export default AppRouter;
