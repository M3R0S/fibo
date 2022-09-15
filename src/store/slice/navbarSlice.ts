import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type TNavbarItem = {
  idActive: string | null;
  staticScrollY: number | null
};

const initialState: TNavbarItem = {
  idActive: null,
  staticScrollY: null
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
  },
});

export const { setIdActive, setStaticScrollY} = navbarSlice.actions;

export default navbarSlice.reducer