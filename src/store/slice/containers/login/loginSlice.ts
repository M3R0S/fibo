import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ILoginSlice } from "store/slice/constants/types";

const initialState: ILoginSlice = {
    isOpenedLoginPopup: false,
    isLogin: true
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setIsOpenedLoginPopup: (state, action: PayloadAction<boolean>) => {
            state.isOpenedLoginPopup = action.payload;
        },
        setIsLogin: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload
          },
    },
});

export const { setIsOpenedLoginPopup, setIsLogin } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
