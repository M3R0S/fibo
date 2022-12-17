import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ILoginSlice } from "store/slice/constants/types";

const initialState: ILoginSlice = {
    isLogin: true,
    isAuthorized: false,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setIsLogin: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload;
        },
        setIsAuthorized: (state, action: PayloadAction<boolean>) => {
            state.isAuthorized = action.payload;
        },
    },
});

export const { setIsLogin, setIsAuthorized } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
