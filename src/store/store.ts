import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketPageSlice from "./slice/basketPageSlice";
import mainPositionApi from "./slice/mainPosition/mainPositionApi";
import mainPositionSlice from "./slice/mainPosition/mainPositionSlice";
import mainProductItemSlice from "./slice/mainProductItemSlice";
import mainProductSlice from "./slice/mainProductSlice";
import navbarSlice from "./slice/navbarSlice";
import newPositionSlice from "./slice/newPositionSlice";
import pizzaModalSlice from "./slice/pizzaModalSlice";
import promotionApi from "./slice/promotion/promotionApi";
import sliderSlice from "./slice/sliderSlice";
import supplementsSlice from "./slice/supplementsSlice";

const rootReducer = combineReducers({
  slider: sliderSlice,
  mainProduct: mainProductSlice,
  mainProductItem: mainProductItemSlice,
  supplements: supplementsSlice,
  navbar: navbarSlice,
  pizzaModal: pizzaModalSlice,
  basketPage: basketPageSlice,
  newPosition: newPositionSlice,
  mainPositionSlice,
  [mainPositionApi.reducerPath]: mainPositionApi.reducer,
  [promotionApi.reducerPath]: promotionApi.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(promotionApi.middleware)
    .concat(mainPositionApi.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
