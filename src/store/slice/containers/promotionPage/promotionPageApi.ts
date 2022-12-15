import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IPopupQueryParams, IPromotionContent } from "store/slice/constants/types";
import { BASE_URL } from "store/slice/constants/const";

const reducerPath = "promotionPageApi";
const url = "promotion_page";

export const promotionPageApi = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: [reducerPath],
    endpoints: (build) => ({
        getPromotionPageList: build.query<IPromotionContent[], null>({
            query: () => ({
                url,
            }),
            providesTags: (result) => [reducerPath],
        }),
        getPromotionModalItem: build.query<IPromotionContent[], IPopupQueryParams>({
            query: ({ popupId }) => ({
                url,
                params: {
                    id: popupId,
                },
            }),
            providesTags: (result) => [reducerPath],
        }),
    }),
});

export const {
    useGetPromotionPageListQuery,
    useGetPromotionModalItemQuery,
    reducer: promotionPageApiReducer,
    reducerPath: promotionPageApiReducerPath,
    middleware: promotionPageApiMiddleware,
} = promotionPageApi;
