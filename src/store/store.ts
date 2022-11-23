import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slice/global/globalSlice";
import basketPageSlice from "./slice/basketPage/basketPageSlice";
import navbarSlice from "./slice/navbar/navbarSlice";
import mainProductSlice from "./slice/mainProduct/mainProductSlice";
import mainProductApi from "./slice/mainProduct/mainProductApi";
import newProductApi from "./slice/newProduct/newProductApi";
import promotionPageApi from "./slice/promotionPage/promotionPageApi";

const rootReducer = combineReducers({
  navbar: navbarSlice,
  basketPage: basketPageSlice,
  global: globalSlice,
  mainProduct: mainProductSlice,
  [newProductApi.reducerPath]: newProductApi.reducer,
  [mainProductApi.reducerPath]: mainProductApi.reducer,
  [promotionPageApi.reducerPath]: promotionPageApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(promotionPageApi.middleware)
      .concat(mainProductApi.middleware)
      .concat(newProductApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
