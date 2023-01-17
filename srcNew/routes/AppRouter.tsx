import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "./routes";

import { LoginPopupApp } from "components/loginPopup";

export const AppRouter: FC = () => {
    return (
        <Routes>
            {publicRoutes.map(({ patch, element, elementChildren, patchChildren }) => (
                <Route key={patch} path={patch} element={element}>
                    <Route path={patchChildren} element={elementChildren} />
                    <Route path="login" element={<LoginPopupApp />} />
                </Route>
            ))}
        </Routes>
    );
};
