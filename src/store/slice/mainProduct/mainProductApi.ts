import { IMainProductItem, IMainProductList, TMainProductQueryParams } from "./types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPopupQueryParams } from "../global/globalTypes";

const mainProductApi = createApi({
  reducerPath: "mainProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  tagTypes: ["mainProductApi"],
  endpoints: (build) => ({
    getMainProductList: build.query<IMainProductList[], TMainProductQueryParams>({
      query: (type) => ({
        url: "main_product",
        params: {
          type,
        },
      }),
      providesTags: (result) => ["mainProductApi"],
    }),
    getMainProductPopupDefault: build.query<IMainProductItem[], IPopupQueryParams>({
      query: ({ popupType, popupId }) => ({
        url: "main_product",
        params: {
          type: popupType,
          id: popupId,
        },
      }),
      providesTags: (result) => ["mainProductApi"],
    }),
  }),
});

export const { useLazyGetMainProductListQuery, useGetMainProductPopupDefaultQuery } =
  mainProductApi;

export default mainProductApi;
