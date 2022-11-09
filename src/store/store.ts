import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketPageSlice from "./slice/basketPageSlice";
import mainProductApi from "./slice/mainProduct/mainProductApi";
import mainProductSlice from "./slice/mainProduct/mainProductSlice";
import mainProductItemSlice from "./slice/mainProductItemSlice";
// import mainProductSlice from "./slice/mainProductSlice";
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
  mainProductSlice,
  [mainProductApi.reducerPath]: mainProductApi.reducer,
  [promotionApi.reducerPath]: promotionApi.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(promotionApi.middleware)
    .concat(mainProductApi.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
