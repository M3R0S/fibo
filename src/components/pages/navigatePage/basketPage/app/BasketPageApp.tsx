import { FC } from "react";
import { Outlet } from "react-router-dom";
import BasketContainer from "../container/basketContainer/BasketContainer";
import cl from "./basketPageApp.module.sass";

const BasketPageApp: FC = () => {
  return (
    <main className={cl.basket}>
      <BasketContainer />
      <Outlet />
    </main>
  );
};

export default BasketPageApp;
