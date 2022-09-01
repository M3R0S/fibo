import {
  createAsyncThunk,
  createSlice,
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
  error: string | undefined;
};

const initialState: TNewPositionList = {
  list: [],
  loading: false,
  error: undefined,
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
    console.log(res.data);
    return res.data;
  } catch (error) {
    return rejectWithValue("Я нью позишн");
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
        state.error = undefined;
      })
      .addCase(getNewPositionList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getNewPositionList.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// function isError(action: AnyAction) {
//   return action.type.endsWith("rejected");
// }

export default newPositionSlice.reducer;
