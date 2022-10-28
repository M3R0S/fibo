import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketPageSlice from "./slice/basketPageSlice";
import mainProductItemSlice from "./slice/mainProductItemSlice";
import mainProductSlice from "./slice/mainProductSlice";
import navbarSlice from "./slice/navbarSlice";
import newPositionSlice from "./slice/newPositionSlice";
import pizzaModalSlice from "./slice/pizzaModalSlice";
import promotionApi from "./slice/promotion/promotionApi";
import promotionSlice from "./slice/promotion/promotionSlice";
import sliderSlice from "./slice/sliderSlice";
import supplementsSlice from "./slice/supplementsSlice";

const rootReducer = combineReducers({
  slider: sliderSlice,
  mainProduct: mainProductSlice,
  mainProductItem: mainProductItemSlice,
  newPosition: newPositionSlice,
  promotionPage: promotionSlice,
  supplements: supplementsSlice,
  navbar: navbarSlice,
  pizzaModal: pizzaModalSlice,
  basketPage: basketPageSlice,
  [promotionApi.reducerPath]: promotionApi.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(promotionApi.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
