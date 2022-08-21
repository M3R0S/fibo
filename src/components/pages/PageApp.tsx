import React, { FC } from "react";
import Slide from "./slider/Slide";
import cl from "../../assets/styles/pages/pageApp.module.sass";
import NewPosition from "./newPosition/NewPositionList";
import MainPagesListApp from "./mainPages/MainPagesListApp";
import Promotion from "./promotion/Promotion";
import Delivery from "./delivery/Delivery";

const PageApp: FC = () => {
  return (
    <main className={cl.main}>
      <Slide></Slide>
      <NewPosition></NewPosition>
      <MainPagesListApp></MainPagesListApp>
      <Promotion></Promotion>
      <Delivery></Delivery>
    </main>
  );
};

export default PageApp;
