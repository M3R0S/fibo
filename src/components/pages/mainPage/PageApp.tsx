import React, { FC } from "react";
import Slide from "./slider/Slide";
import cl from "../../../assets/styles/pages/pageApp.module.sass";
// import MainPositionApp from "./mainPosition/page/MainPositionApp";
import Promotion from "./promotion/Promotion";
import Delivery from "./delivery/Delivery";
import NewPositionList from "./newPosition/NewPositionList";
import { useAppDispatch } from "../../../hook/storeHook/useStore";
import { setOpenModalBurger } from "../../../store/slice/navbarSlice";

const PageApp: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <main
      onClick={() => {
        dispatch(setOpenModalBurger(false));
      }}
      className={cl.main}
    >
      <Slide></Slide>
      <NewPositionList></NewPositionList>
      {/* <MainPositionApp></MainPositionApp> */}
      {/* <MainProductModalApp></MainProductModalApp> */}
      <Promotion></Promotion>
      <Delivery></Delivery>
    </main>
  );
};

export default PageApp;
