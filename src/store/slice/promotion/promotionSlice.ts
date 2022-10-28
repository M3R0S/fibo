import { createSlice } from "@reduxjs/toolkit";
import { TPromotionSlice } from "./types/promotionTypes";

const initialState: TPromotionSlice = {
  openModal: false,
  idModal: '',
}

export const promotionSlice = createSlice({
  name: "promotion",
  initialState,
  reducers: {
    setOpenPromotionModalItem: (state, action) => {
      state.openModal = true;
      state.idModal = action.payload;
    },
    setClosedPromotionModalItem: (state) => {
      state.openModal = false;
    },
  },
});

export const { setOpenPromotionModalItem, setClosedPromotionModalItem } = promotionSlice.actions;

export default promotionSlice.reducer;