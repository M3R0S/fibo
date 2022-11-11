import { FC } from "react";
import Slide from "./slider/Slide";
import cl from "../../../assets/styles/pages/pageApp.module.sass";
import MainProductApp from "./mainProduct/page/MainProductApp";
import Promotion from "./promotion/PromotionList";
import Delivery from "./delivery/DeliveryApp";
import NewPositionList from "./newProduct/NewProductList";
import { useAppDispatch } from "../../../hook/storeHook/useStore";
import { setOpenModalBurger } from "../../../store/slice/navbarSlice";
import MainProductPopupApp from "./mainProduct/popup/MainProductPopupApp";

interface IMainPageApp {
  isOpenPopup?: boolean;
}

const MainPageApp: FC<IMainPageApp> = ({ isOpenPopup = false }) => {
  const dispatch = useAppDispatch();

  return (
    <main
      onClick={() => {
        dispatch(setOpenModalBurger(false));
      }}
      className={cl.main}
    >
      <Slide />
      <NewPositionList />
      <MainProductApp />
      <MainProductPopupApp isOpened={isOpenPopup} />
      <Promotion />
      <Delivery />
    </main>
  );
};

export default MainPageApp;
