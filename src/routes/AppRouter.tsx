import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({patch, element}) => (
        <Route path={patch} element={element}></Route>
      ))}
    </Routes>
  );
};

export default AppRouter;
