import { combineReducers } from "redux";

import { navbarSlice } from "store/slice/navbar/navbarSlice";
import { mainProductSlice } from "store/slice/mainProduct/mainProductSlice";

export const rootReducer = combineReducers({
    // navbar: navbarSlice.reducer,
    // mainProduct: mainProductSlice.reducer,
    // basketPage: basketPageReducer,
    // global: globalReducer,
    // user: userReducer,
    // login: loginReducer,
    // [newProductApiReducerPath]: newProductApiReducer,
    // [mainProductApiReducerPath]: mainProductApiReducer,
    // [promotionPageApiReducerPath]: promotionPageApiReducer,
    // [loginApiReducerPath]: loginApiReducer,
});
