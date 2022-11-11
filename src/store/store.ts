import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketPageSlice from "./slice/basketPageSlice";
import mainProductApi from "./slice/mainProduct/mainProductApi";
import navbarSlice from "./slice/navbarSlice";
import newProductApi from "./slice/newProduct/newProductApi";
import pizzaModalSlice from "./slice/pizzaModalSlice";
import promotionPageApi from "./slice/promotionPage/promotionPageApi";
import sliderSlice from "./slice/sliderSlice";
import supplementsSlice from "./slice/supplementsSlice";

const rootReducer = combineReducers({
  slider: sliderSlice,
  supplements: supplementsSlice,
  navbar: navbarSlice,
  pizzaModal: pizzaModalSlice,
  basketPage: basketPageSlice,
  [newProductApi.reducerPath]: newProductApi.reducer,
  [mainProductApi.reducerPath]: mainProductApi.reducer,
  [promotionPageApi.reducerPath]: promotionPageApi.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(promotionPageApi.middleware)
    .concat(mainProductApi.middleware)
    .concat(newProductApi.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
