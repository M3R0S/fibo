import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "utils/const";
import { PopupQueryParams } from "utils/types";

import { PromotionContent } from "./types";

const reducerPath = "promotionPageApi";
const url = "promotion_page";

export const promotionPageApi = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: [reducerPath],
    endpoints: (build) => ({
        getPromotionPageList: build.query<PromotionContent[], null>({
            query: () => ({
                url,
            }),
            providesTags: (result) => [reducerPath],
        }),
        getPromotionModalItem: build.query<
            PromotionContent[],
            PopupQueryParams
        >({
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
