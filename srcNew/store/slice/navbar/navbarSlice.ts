import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavbarSlice } from "./types";

const initialState: NavbarSlice = {
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
