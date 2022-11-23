import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGlobalSlice } from "./globalTypes";

const initialState: IGlobalSlice = {
  globalIsIntersecting: true,
  screenWidth: window.innerWidth,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setGlobalIsIntersecting: (state, action: PayloadAction<boolean>) => {
      state.globalIsIntersecting = action.payload;
    },
    setScreenWidth: (state, action: PayloadAction<number>) => {
      state.screenWidth = action.payload;
    },
  },
});

export const { setGlobalIsIntersecting, setScreenWidth } = globalSlice.actions;

export default globalSlice.reducer;
