import { FC } from "react";
import cl from "./errorPageApp.module.sass";
import ErrorContent from "../content/ErrorContent";
import { Outlet } from "react-router-dom";
import useLocationLinkActive from "hook/useLocationLinkActive/useLocationLinkActive";

const ErrorPageApp: FC = () => {
  useLocationLinkActive();

  return (
    <main className={cl.page}>
      <ErrorContent />
      <Outlet />
    </main>
  );
};

export default ErrorPageApp;
