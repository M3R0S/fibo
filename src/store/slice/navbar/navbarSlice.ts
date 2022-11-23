import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INavbarItem } from "./types";

const initialState: INavbarItem = {
  linkActive: null,
  openNavbarBurger: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setLinkActive: (state, action: PayloadAction<string | null>) => {
      state.linkActive = action.payload;
    },
    setOpenNavbarBurger: (state, action: PayloadAction<boolean>) => {
      state.openNavbarBurger = action.payload;
    },
  },
});

export const { setOpenNavbarBurger, setLinkActive } = navbarSlice.actions;

export default navbarSlice.reducer;
