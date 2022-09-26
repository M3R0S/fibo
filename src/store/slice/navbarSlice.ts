import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TNavbarItem = {
  idActive: string | null;
  staticScrollY: number | null
  screenWidth: number | null
  openModalBurger: boolean
};

const initialState: TNavbarItem = {
  idActive: null,
  staticScrollY: null,
  screenWidth: null,
  openModalBurger: false
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIdActive: (state, action: PayloadAction<string | null>) => {
      state.idActive = action.payload;
    },
    setStaticScrollY: (state, action: PayloadAction<number>) => {
      state.staticScrollY = action.payload;
    },
    setScreenWidth: (state, action: PayloadAction<number>) => {
      state.screenWidth = action.payload
    },
    setOpenModalBurger: (state, action : PayloadAction<boolean>) => {
      state.openModalBurger = action.payload
    } 
  },
});

export const { setIdActive, setStaticScrollY, setScreenWidth, setOpenModalBurger} = navbarSlice.actions;

export default navbarSlice.reducer