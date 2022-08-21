import { configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./slice/mainPageSlice";
import newPositionSlice from "./slice/newPositionSlice";
import promotionSlice from "./slice/promotionSlice";
import sliderSlice from "./slice/sliderSlice";

const store = configureStore({
  reducer: {
    slider: sliderSlice,
    mainPage: mainPageSlice,
    newPosition: newPositionSlice,
    promotion: promotionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
