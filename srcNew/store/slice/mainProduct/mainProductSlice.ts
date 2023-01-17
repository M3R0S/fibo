import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SectionName } from "utils/types";
import { MainProductSlice } from "./types";

const initialState: MainProductSlice = {
    endLoadingMainProduct: {
        pizza: false,
        pasta: false,
        soup: false,
        salad: false,
    },
    isEndLoadingMainProduct: false,
    isIntersectingMainProduct: true,
};

export const mainProductSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setEndLoadingMainProduct: (
            state,
            action: PayloadAction<{ endpoint: SectionName; result: boolean }>
        ) => {
            state.endLoadingMainProduct[action.payload.endpoint] = action.payload.result;
        },
        setIsEndLoadingMainProduct: (state, action: PayloadAction<boolean>) => {
            state.isEndLoadingMainProduct = action.payload;
        },
        setIsIntersectingMainProduct: (state, action: PayloadAction<boolean>) => {
            state.isIntersectingMainProduct = action.payload;
        },
    },
});

export const {
    setEndLoadingMainProduct,
    setIsEndLoadingMainProduct,
    setIsIntersectingMainProduct,
} = mainProductSlice.actions;

export const mainProductReducer = mainProductSlice.reducer;
