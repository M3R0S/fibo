import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware()
    //         .concat(promotionPageApiMiddleware)
    //         .concat(mainProductApiMiddleware)
    //         .concat(newProductApiMiddleware)
    //         .concat(loginApiMiddleware),
});
