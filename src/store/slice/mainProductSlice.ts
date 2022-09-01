import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

type DataResponse = { sectionName: SectionName; res: MainProductItemType[] };

export type SectionName = "pizza" | "pasta" | "soup" | "salad";

type ResponsePoint = {
  endpoint: SectionName;
  itemId: number;
};

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
  loading: boolean;
  error: string | undefined;
};

const initialState: MainProductListType = {
  data: {
    pizza: [],
    pasta: [],
    soup: [],
    salad: [],
  },
  itemModal: [],
  loading: false,
  error: undefined,
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
    return { sectionName: endpoint, res: res.data };
  } catch (error) {
    return rejectWithValue("Ошибка загрузки");
  }
});

export const getMainProductItem = createAsyncThunk<
  MainProductItemType[],
  ResponsePoint,
  { rejectValue: string }
>("mainPage/getMainProductItem", async ({ endpoint, itemId }, { rejectWithValue }) => {
  try {
    const res = await axios.get<MainProductItemType[]>(
      `http://localhost:4000/${endpoint}?id=${itemId}`
    );
    return res.data;
  } catch (error) {
    return rejectWithValue("Ошибка загрузки");
  }
});

export const mainProductSlice = createSlice({
  name: "mainProduct",
  initialState,
  reducers: {
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

// export const {} = mainProductSlice.actions

export default mainProductSlice.reducer;
