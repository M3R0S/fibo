import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export type TNewPositionItem = {
  h2Text: string;
  strongText: string;
  img: string;
};

type TNewPositionList = {
  list: TNewPositionItem[];
  loading: boolean;
  error: string | null;
};

const initialState: TNewPositionList = {
  list: [],
  loading: false,
  error: null,
};

export const getNewPositionList = createAsyncThunk<
  TNewPositionItem[],
  undefined,
  { rejectValue: string }
>("newPosition/getNewPositionList", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get<TNewPositionItem[]>(
      "http://localhost:4000/newPosition"
    );
    return res.data;
  } catch (error) {
    return rejectWithValue("Ошибка загрузки");
  }
});

export const newPositionSlice = createSlice({
  name: "newPosition",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewPositionList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNewPositionList.fulfilled, (state, action) => {
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

export default newPositionSlice.reducer;
