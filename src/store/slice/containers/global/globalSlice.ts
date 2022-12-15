import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IGlobalSlice } from "store/slice/constants/types";

const initialState: IGlobalSlice = {
    globalScreenWidth: window.innerWidth,
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setGlobalScreenWidth: (state, action: PayloadAction<number>) => {
            state.globalScreenWidth = action.payload;
        },
    },
});

export const { setGlobalScreenWidth } = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
