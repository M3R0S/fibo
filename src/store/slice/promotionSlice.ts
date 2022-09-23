import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { sleep } from "../../helpers/sleep";

export type TPromotionItem = {
  id: number;
  img: string;
  h2Text: string;
  pText: string;
};

type TPromotionList = {
  list: TPromotionItem[];
  loading: boolean;
  error: string | undefined;
};

const initialState: TPromotionList = {
  list: [],
  loading: false,
  error: undefined,
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
    // await sleep(1000)
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
        state.error = undefined;
      })
      .addCase(getPromotionList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getPromotionList.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  },
});

// function isError(action: AnyAction) {
//   return action.type.endsWith("rejected");
// }

// export const { } = promotionSlice.actions;

export default promotionSlice.reducer;
