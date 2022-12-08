import { combineReducers } from "redux";
import {
    basketPageReducer,
    globalReducer,
    loginApiReducer,
    loginApiReducerPath,
    mainProductApiReducer,
    mainProductApiReducerPath,
    mainProductReducer,
    navbarReducer,
    newProductApiReducer,
    newProductApiReducerPath,
    promotionPageApiReducer,
    promotionPageApiReducerPath,
    userReducer,
} from "../slice";

export const rootReducer = combineReducers({
    navbar: navbarReducer,
    basketPage: basketPageReducer,
    global: globalReducer,
    mainProduct: mainProductReducer,
    user: userReducer,
    [newProductApiReducerPath]: newProductApiReducer,
    [mainProductApiReducerPath]: mainProductApiReducer,
    [promotionPageApiReducerPath]: promotionPageApiReducer,
    [loginApiReducerPath]: loginApiReducer,
});
