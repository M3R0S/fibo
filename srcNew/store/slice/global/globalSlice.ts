import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GlobalSlice } from "./types";

const initialState: GlobalSlice = {
    // globalScreenWidth: window.innerWidth,
    globalScreenWidth: 0,
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
