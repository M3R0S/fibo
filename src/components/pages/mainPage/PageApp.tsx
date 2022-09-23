import React, { FC } from "react";
import Slide from "./slider/Slide";
import cl from "../../../assets/styles/pages/pageApp.module.sass";
import MainProductListApp from "./mainProduct/MainProductListApp";
import Promotion from "./promotion/Promotion";
import Delivery from "./delivery/Delivery";
import NewPositionList from "./newPosition/NewPositionList";

const PageApp: FC = () => {
  return (
    <main className={cl.main}>
      <Slide></Slide>
      <NewPositionList></NewPositionList>
      <MainProductListApp></MainProductListApp>
      <Promotion></Promotion>
      <Delivery></Delivery>
    </main>
  );
};

export default PageApp;
