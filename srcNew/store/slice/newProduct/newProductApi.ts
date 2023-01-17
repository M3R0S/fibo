import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "utils/const";
import { NewProductItem } from "./types";

const reducerPath = "newProductApi";
const url = "new_product";

export const newProductApi = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: [reducerPath],
    endpoints: (build) => ({
        getNewProductList: build.query<NewProductItem[], null>({
            query: () => ({
                url,
            }),
            providesTags: (result) => [reducerPath],
        }),
    }),
});

export const {
    useGetNewProductListQuery,
    reducer: newProductApiReducer,
    reducerPath: newProductApiReducerPath,
    middleware: newProductApiMiddleware,
} = newProductApi;
