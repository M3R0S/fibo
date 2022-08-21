import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export type TPromotionItem = {
  img: string;
};

type TPromotionList = {
  list: TPromotionItem[];
  loading: boolean;
  error: string | null;
};

const initialState: TPromotionList = {
  list: [],
  loading: false,
  error: null,
};

export const getPromotionList = createAsyncThunk<
  TPromotionItem[],
  undefined,
  { rejectValue: string }
>("promotion/getPromotionList", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get<TPromotionItem[]>(
      "http://localhost:4000/newPosition"
    );
    return res.data;
  } catch (error) {
    return rejectWithValue("Ошибка загрузки");
  }
});

export const promotionSlice = createSlice({
  name: "promotion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPromotionList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPromotionList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

export default promotionSlice.reducer;
