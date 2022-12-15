import { TSectionName } from "store/slice/constants/types";

export interface IMainProductList {
    title: string;
    endpoint: TSectionName;
}

export interface IUseIntersectingEndpoint {
    endpoint: TSectionName;
}