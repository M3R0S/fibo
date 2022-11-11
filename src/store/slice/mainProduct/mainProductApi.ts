import { TMainProductItem, TMainProductList, TMainProductQueryParams} from './types/mainProductTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TPopupQueryParams } from '../../globalTypes/globalStoreSliceType';


const mainProductApi = createApi({
    reducerPath: 'mainProductApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/',
    }),
    tagTypes: ['mainProductApi'],
    endpoints: (build) => ({
        getMainProductList: build.query<TMainProductList[], TMainProductQueryParams>({
            query: ({type}) => ({
                url: 'main_product',
                params: {
                    type,
                }
            }),
            providesTags: (result) => ['mainProductApi']
        }),
        getMainProductPopupDefault: build.query<TMainProductItem[], TPopupQueryParams>({
            query: ({popupType, popupId}) => ({
                url: 'main_product',
                params: {
                    type: popupType,
                    id: popupId,
                }
            }),
            providesTags: (result) => ['mainProductApi']
        })
    })
})

export const {useLazyGetMainProductListQuery, useGetMainProductPopupDefaultQuery} = mainProductApi 

export default mainProductApi