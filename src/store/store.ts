import { configureStore } from "@reduxjs/toolkit";
import mainProductItemSlice from "./slice/mainProductItemSlice";
import mainProductSlice from "./slice/mainProductSlice";
import navbarSlice from "./slice/navbarSlice";
import newPositionSlice from "./slice/newPositionSlice";
import promotionItemSlice from "./slice/promotionItemSlice";
import promotionSlice from "./slice/promotionSlice";
import sliderSlice from "./slice/sliderSlice";
import supplementsSlice from "./slice/supplementsSlice";

const store = configureStore({
  reducer: {
    slider: sliderSlice,
    mainProduct: mainProductSlice,
    mainProductItem: mainProductItemSlice,
    newPosition: newPositionSlice,
    promotionPage: promotionSlice,
    promotionPageItem: promotionItemSlice,
    supplements: supplementsSlice,
    navbar: navbarSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
