import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TPopupQueryParams } from "../../types/globalStoreSliceType";
import { TPromotionContent } from "./types/promotionTypes";

 const promotionApi = createApi({
    reducerPath: 'promotionApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:4000/' 
    }),
    tagTypes: ['promotionApi'],
    endpoints: (build) => ({
      getPromotionPageList: build.query<TPromotionContent[], null>({
        query: () => ({
          url: 'promotion_page'
        }),
        providesTags: (result) => ['promotionApi']
      }),
      getPromotionModalItem: build.query<TPromotionContent[], TPopupQueryParams >({
        query: ({popupId}) => ({
          url: 'promotion_page',
          params: {
            id: popupId
          }
        }),
        providesTags: (result) => ['promotionApi']
      })
    })
  })

export const {useGetPromotionPageListQuery, useGetPromotionModalItemQuery} = promotionApi

export default promotionApi