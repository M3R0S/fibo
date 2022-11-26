import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slice/global/globalSlice";
import basketPageSlice from "./slice/basketPage/basketPageSlice";
import navbarSlice from "./slice/navbar/navbarSlice";
import mainProductSlice from "./slice/mainProduct/mainProductSlice";
import mainProductApi from "./slice/mainProduct/mainProductApi";
import newProductApi from "./slice/newProduct/newProductApi";
import promotionPageApi from "./slice/promotionPage/promotionPageApi";
import loginApi from "./slice/login/loginApi";
import userSlice from "./slice/login/userSlice";

const rootReducer = combineReducers({
  navbar: navbarSlice,
  basketPage: basketPageSlice,
  global: globalSlice,
  mainProduct: mainProductSlice,
  user: userSlice,
  [newProductApi.reducerPath]: newProductApi.reducer,
  [mainProductApi.reducerPath]: mainProductApi.reducer,
  [promotionPageApi.reducerPath]: promotionPageApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(promotionPageApi.middleware)
      .concat(mainProductApi.middleware)
      .concat(newProductApi.middleware)
      .concat(loginApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
