import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import {
    loginApiMiddleware,
    mainProductApiMiddleware,
    newProductApiMiddleware,
    promotionPageApiMiddleware,
} from "../slice";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(promotionPageApiMiddleware)
            .concat(mainProductApiMiddleware)
            .concat(newProductApiMiddleware)
            .concat(loginApiMiddleware),
});
