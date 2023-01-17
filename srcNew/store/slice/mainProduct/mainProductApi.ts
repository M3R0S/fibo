import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "utils/const";
import { PopupQueryParams } from "utils/types";
import {
    MainProductItem,
    MainProductPizzaItem,
    MainProductQueryParams,
} from "./types";

const reducerPath = "mainProductApi";
const url = "main_product";

export const mainProductApi = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: [reducerPath],
    endpoints: (build) => ({
        getMainProductList: build.query<
            MainProductItem[],
            MainProductQueryParams
        >({
            query: (type) => ({
                url,
                params: {
                    type,
                },
            }),
            providesTags: (result) => [reducerPath],
        }),
        getMainProductPopupDefault: build.query<
            MainProductPizzaItem[],
            PopupQueryParams
        >({
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
