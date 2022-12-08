import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INewProductItem } from "../types";

export const newProductApi = createApi({
    reducerPath: "newProductApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/",
    }),
    tagTypes: ["newProductApi"],
    endpoints: (build) => ({
        getNewProductList: build.query<INewProductItem[], null>({
            query: () => ({
                url: "new_product",
            }),
            providesTags: (result) => ["newProductApi"],
        }),
    }),
});

export const {
    useGetNewProductListQuery,
    reducer: newProductApiReducer,
    reducerPath: newProductApiReducerPath,
    middleware: newProductApiMiddleware,
} = newProductApi;