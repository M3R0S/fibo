import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPopupQueryParams } from "../global/globalTypes";
import { IPromotionContent } from "./types";

const promotionPageApi = createApi({
  reducerPath: "promotionPageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  tagTypes: ["promotionPageApi"],
  endpoints: (build) => ({
    getPromotionPageList: build.query<IPromotionContent[], null>({
      query: () => ({
        url: "promotion_page",
      }),
      providesTags: (result) => ["promotionPageApi"],
    }),
    getPromotionModalItem: build.query<IPromotionContent[], IPopupQueryParams>({
      query: ({ popupId }) => ({
        url: "promotion_page",
        params: {
          id: popupId,
        },
      }),
      providesTags: (result) => ["promotionPageApi"],
    }),
  }),
});

export const { useGetPromotionPageListQuery, useGetPromotionModalItemQuery } = promotionPageApi;

export default promotionPageApi;
