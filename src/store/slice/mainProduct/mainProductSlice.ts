import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMainProductSlice, TSectionName } from "../types";

const initialState: IMainProductSlice = {
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
            action: PayloadAction<{ endpoint: TSectionName; result: boolean }>
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
