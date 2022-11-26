import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGlobalSlice } from "./globalTypes";

const initialState: IGlobalSlice = {
  isOpenedLoginPopup: true,
  globalIsIntersecting: true,
  screenWidth: window.innerWidth,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsOpenedLoginPopup: (state, action: PayloadAction<boolean>) => {
      state.isOpenedLoginPopup = action.payload;
    },
    setGlobalIsIntersecting: (state, action: PayloadAction<boolean>) => {
      state.globalIsIntersecting = action.payload;
    },
    setScreenWidth: (state, action: PayloadAction<number>) => {
      state.screenWidth = action.payload;
    },
  },
});

export const { setGlobalIsIntersecting, setScreenWidth, setIsOpenedLoginPopup } = globalSlice.actions;

export default globalSlice.reducer;
