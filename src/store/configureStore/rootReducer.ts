import { combineReducers } from "redux";

import {
    basketPageReducer,
    globalReducer,
    loginApiReducer,
    loginApiReducerPath,
    loginReducer,
    mainProductApiReducer,
    mainProductApiReducerPath,
    mainProductReducer,
    navbarReducer,
    newProductApiReducer,
    newProductApiReducerPath,
    promotionPageApiReducer,
    promotionPageApiReducerPath,
    userReducer,
} from "../slice/containers";

export const rootReducer = combineReducers({
    navbar: navbarReducer,
    basketPage: basketPageReducer,
    global: globalReducer,
    mainProduct: mainProductReducer,
    user: userReducer,
    login: loginReducer,
    [newProductApiReducerPath]: newProductApiReducer,
    [mainProductApiReducerPath]: mainProductApiReducer,
    [promotionPageApiReducerPath]: promotionPageApiReducer,
    [loginApiReducerPath]: loginApiReducer,
});
