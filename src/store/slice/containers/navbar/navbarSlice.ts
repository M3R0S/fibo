import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INavbarSlice } from "store/slice/constants/types";

const initialState: INavbarSlice = {
    navbarLinkActive: null,
    openNavbarBurger: false,
};

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setNavbarLinkActive: (state, action: PayloadAction<string | null>) => {
            state.navbarLinkActive = action.payload;
        },
        setOpenNavbarBurger: (state, action: PayloadAction<boolean>) => {
            state.openNavbarBurger = action.payload;
        },
    },
});

export const { setOpenNavbarBurger, setNavbarLinkActive } = navbarSlice.actions;

export const navbarReducer = navbarSlice.reducer;
