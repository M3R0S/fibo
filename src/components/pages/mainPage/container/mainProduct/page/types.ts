import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    QueryDefinition,
} from "@reduxjs/toolkit/dist/query";
import { QueryActionCreatorResult } from "@reduxjs/toolkit/dist/query/core/buildInitiate";
import {
    IMainProductList,
    TMainProductQueryParams,
    TSectionName,
} from "store";

export interface IMainProductGalleries {
    id: string;
    title: string;
    endpoint: TSectionName;
}

export interface IUseMainProductList {
    endpoint: TSectionName;
    trigger: (
        arg: TMainProductQueryParams,
        preferCacheValue?: boolean | undefined
    ) => QueryActionCreatorResult<
        QueryDefinition<
            TMainProductQueryParams,
            BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
            "mainProductApi",
            IMainProductList[],
            "mainProductApi"
        >
    >;
}
