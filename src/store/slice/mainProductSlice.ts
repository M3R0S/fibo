import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { sleep } from "../../helpers/sleep";

type DataResponse = { sectionName: SectionName; res: MainProductItemType[] };

export type SectionName = "pizza" | "pasta" | "soup" | "salad";

type MainProductItemType = {
  id: number;
  type: SectionName;
  h2Text: string;
  pText: string;
  strongText: string;
  img: string;
};

type MainProductListType = {
  data: Record<SectionName, MainProductItemType[]>;
  itemModal: MainProductItemType[];
  loading: boolean | null;
  error: string | undefined;
  loadingTime: number | null
};

const initialState: MainProductListType = {
  data: {
    pizza: [],
    pasta: [],
    soup: [],
    salad: [],
  },
  itemModal: [],
  loading: null,
  error: undefined,
  loadingTime : null
};

export const getMainProduct = createAsyncThunk<
  DataResponse,
  SectionName,
  { rejectValue: string }
>("mainPage/getMainProduct", async (endpoint, { rejectWithValue }) => {
    try {
      const res = await axios.get<MainProductItemType[]>(
        `http://localhost:4000/${endpoint}`
        );
        await sleep(1000)
        return { sectionName: endpoint, res: res.data };
      } catch (error) {
        return rejectWithValue("Ошибка загрузки");
      }
});

export const mainProductSlice = createSlice({
  name: "mainProduct",
  initialState,
  reducers: {
    setLoadingTime: (state, action) => {
        state.loadingTime = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMainProduct.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getMainProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data[action.payload.sectionName] = [...action.payload.res];
      })
      .addCase(getMainProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// function isError(action: AnyAction) {
//   return action.type.endsWith("rejected");
// }

export const {setLoadingTime} = mainProductSlice.actions

export default mainProductSlice.reducer;
