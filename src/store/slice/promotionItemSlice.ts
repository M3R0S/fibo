import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sleep } from "../../helpers/sleep";

export type TPromotionItem = {
  id: number;
  img: string;
  h2Text: string;
  pText: string;
};

type TPromotionList = {
  item: TPromotionItem[];
  loading: boolean;
  error: string | undefined;
  openModal: boolean;
  idModal: number;
};

const initialState: TPromotionList = {
  item: [],
  loading: false,
  error: undefined,
  openModal: false,
  idModal: 0,
}

export const getPromotionItem = createAsyncThunk<
  TPromotionItem[],
  number,
  { rejectValue: string }
>("promotion/getPromotionItem", async (itemId, { rejectWithValue }) => {
  try {
    const res = await axios.get<TPromotionItem[]>(
      `http://localhost:4000/promotion_page?id=${itemId}`
    );
    await sleep(1000);
    return res.data;
  } catch (error) {
    return rejectWithValue("Ошибка загрузки");
  }
});

export const promotionSlice = createSlice({
  name: "promotion",
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = true;
      state.idModal = action.payload;
    },
    setClosedModal: (state) => {
      state.openModal = false;
      state.idModal = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPromotionItem.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getPromotionItem.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(getPromotionItem.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setOpenModal, setClosedModal } = promotionSlice.actions;

export default promotionSlice.reducer;
