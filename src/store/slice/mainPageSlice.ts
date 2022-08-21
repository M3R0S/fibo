import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

type DataResponse = { sectionName: SectionName; res: MainPageItemType[] }

export type SectionName = "pizza" | "pasta" | "soup" | "salad";

type MainPageItemType = {
  id: number;
  h2Text: string;
  pText: string;
  strongText: string;
  img: string;
};

type MainPageListType = {
  data: Record<SectionName, MainPageItemType[]>;
  loading: boolean;
  error: string | null;
};

const initialState: MainPageListType = {
  data: {
    pizza: [],
    pasta: [],
    soup: [],
    salad: [],
  },
  loading: false,
  error: null,
};

export const getMainPage = createAsyncThunk<
  DataResponse,
  SectionName,
  { rejectValue: string }
>("mainPage/getMainPage", async (endpoint, { rejectWithValue }) => {
  try {
    const res = await axios.get<MainPageItemType[]>(
      `http://localhost:4000/${endpoint}`
    );
    return {sectionName: endpoint, res: res.data};
  } catch (error) {
    return rejectWithValue("Ошибка загрузки");
  }
});

export const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMainPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMainPage.fulfilled, (state, action) => {
        state.loading = false;
        state.data[action.payload.sectionName] = [...action.payload.res];
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

// export const {} = mainPageSlice.actions

export default mainPageSlice.reducer;
