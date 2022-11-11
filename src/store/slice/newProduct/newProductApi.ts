import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TNewProductItem } from './types/newProductTypes';

const newProductApi = createApi({
    reducerPath: "newProductApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/",
    }),
    tagTypes: ['newProductApi'],
    endpoints: (build) => ({
        getNewProductList: build.query<TNewProductItem[], null>({
            query: () => ({
                url: 'new_product'
            }),
            providesTags: (result) => ['newProductApi']
        })
    })
})

export const {useGetNewProductListQuery} = newProductApi

export default newProductApi