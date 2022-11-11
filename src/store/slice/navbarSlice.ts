import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSectionName } from "./mainProduct/types/mainProductTypes";

export type TEndLoadingProduct = {
  pizza: boolean,
  pasta: boolean,
  soup: boolean,
  salad: boolean,
}

type TNavbarItem = {
  endLoadingProduct: TEndLoadingProduct
  isEndLoadingProduct: boolean
  globalIsIntersecting: boolean
  linkActive: string | null
  staticScrollY: number | null
  screenWidth: number | null
  openModalBurger: boolean
};

const initialState: TNavbarItem = {
  endLoadingProduct: {
    pizza: false,
    pasta: false,
    soup: false,
    salad: false
  },
  isEndLoadingProduct: false,
  globalIsIntersecting: true,
  linkActive: null,
  staticScrollY: null,
  screenWidth: window.innerWidth,
  openModalBurger: false
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setEndLoadingProduct: (state, action: PayloadAction<{endpoint: TSectionName, result: boolean}>) => {
      state.endLoadingProduct[action.payload.endpoint] = action.payload.result
    },
    setIsEndLoadingProduct: (state, action: PayloadAction<boolean>) => {
      state.isEndLoadingProduct = action.payload
    },
    setGlobalIsIntersecting: (state, action: PayloadAction<boolean>) => {
      state.globalIsIntersecting = action.payload
    },
    setLinkActive: (state, action: PayloadAction<string | null>) => {
      state.linkActive = action.payload;
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

export const { setEndLoadingProduct, setIsEndLoadingProduct, setGlobalIsIntersecting, setStaticScrollY, setScreenWidth, setOpenModalBurger, setLinkActive} = navbarSlice.actions;

export default navbarSlice.reducer