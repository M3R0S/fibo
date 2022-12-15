import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { INewProductItem } from "store/slice/constants/types";
import { BASE_URL } from "store/slice/constants/const";

const reducerPath = "newProductApi";
const url = "new_product";

export const newProductApi = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: [reducerPath],
    endpoints: (build) => ({
        getNewProductList: build.query<INewProductItem[], null>({
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
