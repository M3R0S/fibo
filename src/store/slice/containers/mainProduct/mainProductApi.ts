import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import {
    IMainProductPizzaItem,
    IMainProductItem,
    IPopupQueryParams,
    TMainProductQueryParams,
} from "store/slice/constants/types";
import { BASE_URL } from "store/slice/constants/const";

const reducerPath = "mainProductApi";
const url = "main_product";

export const mainProductApi = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: [reducerPath],
    endpoints: (build) => ({
        getMainProductList: build.query<IMainProductItem[], TMainProductQueryParams>({
            query: (type) => ({
                url,
                params: {
                    type,
                },
            }),
            providesTags: (result) => [reducerPath],
        }),
        getMainProductPopupDefault: build.query<IMainProductPizzaItem[], IPopupQueryParams>({
            query: ({ popupType, popupId }) => ({
                url,
                params: {
                    type: popupType,
                    id: popupId,
                },
            }),
            providesTags: (result) => [reducerPath],
        }),
    }),
});

export const {
    useLazyGetMainProductListQuery,
    useGetMainProductPopupDefaultQuery,
    reducer: mainProductApiReducer,
    reducerPath: mainProductApiReducerPath,
    middleware: mainProductApiMiddleware,
} = mainProductApi;
