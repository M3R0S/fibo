import React, { FC } from "react";
import Slide from "./mainPage/slider/Slide";
import cl from "../../assets/styles/pages/pageApp.module.sass";
import MainPagesListApp from "./mainPage/mainProduct/MainProductListApp";
import Promotion from "./mainPage/promotion/Promotion";
import Delivery from "./mainPage/delivery/Delivery";
import NewPositionList from "./mainPage/newPosition/NewPositionList";

const PageApp: FC = () => {
  return (
    <main className={cl.main}>
      <Slide></Slide>
      <NewPositionList></NewPositionList>
      <MainPagesListApp></MainPagesListApp>
      <Promotion></Promotion>
      <Delivery></Delivery>
    </main>
  );
};

export default PageApp;
