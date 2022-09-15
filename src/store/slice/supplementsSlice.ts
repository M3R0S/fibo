import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { sleep } from "../../helpers/sleep";

export type SectionNameSupplements = "pizza" | "pasta" | "soup" | "salad";

export type TSupplementsItem = {
  id: number
  h1Text: string;
  strongText: string;
  img: string;
};

type TSupplementsList = {
  list: TSupplementsItem[];
  loading: boolean;
  error: string | undefined;
};

const initialState: TSupplementsList = {
  list: [],
  loading: false,
  error: undefined,
};

export const getSupplementsList = createAsyncThunk<
  TSupplementsItem[],
  SectionNameSupplements,
  { rejectValue: string }
>("supplements/getSupplementsList", async (endpoint, { rejectWithValue }) => {
  try {
    const res = await axios.get<TSupplementsItem[]>(
      `http://localhost:4000/supplements_${endpoint}`
    );
    await sleep(1000)
    return res.data;
  } catch (error) {
    return rejectWithValue("Я супплиментс");
  }
});

export const supplementsSlice = createSlice({
  name: "supplements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSupplementsList.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getSupplementsList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getSupplementsList.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// function isError(action: AnyAction) {
//   return action.type.endsWith("rejected");
// }

export default supplementsSlice.reducer;

