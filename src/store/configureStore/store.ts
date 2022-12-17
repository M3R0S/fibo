import { configureStore } from "@reduxjs/toolkit";

import { ROOT_REDUCER } from "./rootReducer";

import {
    loginApiMiddleware,
    mainProductApiMiddleware,
    newProductApiMiddleware,
    promotionPageApiMiddleware,
} from "../slice/containers";

export const store = configureStore({
    reducer: ROOT_REDUCER,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(promotionPageApiMiddleware)
            .concat(mainProductApiMiddleware)
            .concat(newProductApiMiddleware)
            .concat(loginApiMiddleware),
});
