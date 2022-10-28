import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TPromotionItem } from "./types/promotionTypes";

 const promotionApi = createApi({
    reducerPath: 'promotionApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:4000/promotion_page/' 
    }),
    tagTypes: ['promotionApi'],
    endpoints: (build) => ({
      getPromotionPageList: build.query<TPromotionItem[], string>({
        query: (empty: string,) => ({
          url: empty,
        }),
        providesTags: (result) => ['promotionApi']
      }),
      getPromotionModalItem: build.query<TPromotionItem, string>({
        query: (id: string,) => ({
          url: id,
        }),
        providesTags: (result) => ['promotionApi']
      })
    })
  })

export default promotionApi