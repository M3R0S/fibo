import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export type TPromotionItem = {
  id: number;
  img: string;
  h2Text: string;
  pText: string;
};

type TPromotionList = {
  list: TPromotionItem[];
  itemModal: TPromotionItem[];
  loading: boolean;
  loadingModal: boolean;
  error: string | undefined;
  errorModal: string | undefined;
  openModal: boolean;
  idModal: number;
};

const initialState: TPromotionList = {
  list: [],
  itemModal: [],
  loading: false,
  loadingModal: false,
  error: undefined,
  errorModal: undefined,
  openModal: false,
  idModal: 0,
};

export const getPromotionList = createAsyncThunk<
  TPromotionItem[],
  undefined,
  { rejectValue: string }
>("promotion/getPromotionList", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get<TPromotionItem[]>(
      "http://localhost:4000/promotion_page"
    );
    return res.data;
  } catch (error) {
    return rejectWithValue("Ошибка загрузки");
  }
});

export const getPromotionItem = createAsyncThunk<
  TPromotionItem[],
  number,
  { rejectValue: string }
>("promotion/getPromotionItem", async (itemId, { rejectWithValue }) => {
  try {
    const res = await axios.get<TPromotionItem[]>(
      `http://localhost:4000/promotion_page?id=${itemId}`
    );
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
      state.idModal = 0
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPromotionList.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getPromotionList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getPromotionList.rejected, (state, action) => {
        state.errorModal = action.payload;
        state.loadingModal = false;
      })
      .addCase(getPromotionItem.pending, (state) => {
        state.loadingModal = true;
        state.errorModal = undefined;
      })
      .addCase(getPromotionItem.fulfilled, (state, action) => {
        state.loadingModal = false;
        state.itemModal = action.payload;
      })
      .addCase(getPromotionItem.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  },
});

// function isError(action: AnyAction) {
//   return action.type.endsWith("rejected");
// }

export const { setOpenModal, setClosedModal } = promotionSlice.actions;

export default promotionSlice.reducer;
