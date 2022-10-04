import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sleep } from "../../helpers/sleep";

export type SectionName = "pizza" | "pasta" | "soup" | "salad";

type ResponsePoint = {
  typeModal: SectionName;
  idModal: number;
};

export type TMainProductItemModal = {
  id: number;
  type: SectionName;
  title: string;
  info: string;
  img: string;
  price: number;
  weightProductSmall?: number;
  weightProductMedium?: number;
  weightProductBig?: number;
  weightProduct?: number;
  priceSmall?: number;
  priceMedium?: number;
  priceBig?: number;
};

type TMainProductListModal = {
  item: TMainProductItemModal[];
  loading: boolean;
  error: string | undefined;
  openModal: boolean;
  idModal: number;
  typeModal: SectionName;
};

const initialState: TMainProductListModal = {
  item: [],
  loading: false,
  error: undefined,
  openModal: false,
  idModal: 0,
  typeModal: "pizza",
};

export const getMainProductItem = createAsyncThunk<
  TMainProductItemModal[],
  ResponsePoint,
  { rejectValue: string }
>(
  "mainPage/getMainProductItem",
  async ({ typeModal, idModal }, { rejectWithValue }) => {
    try {
      const res = await axios.get<TMainProductItemModal[]>(
        `http://localhost:4000/${typeModal}?id=${idModal}`
      );
      // await sleep(1000);
      return res.data;
    } catch (error) {
      return rejectWithValue("Ошибка загрузки");
    }
  }
);

export const mainProductSlice = createSlice({
  name: "mainProduct",
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = true;
      [state.typeModal, state.idModal] = action.payload;
    },
    setClosedModal: (state) => {
      state.openModal = false;
      state.idModal = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMainProductItem.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getMainProductItem.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(getMainProductItem.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// function isError(action: AnyAction) {
//   return action.type.endsWith("rejected");
// }

export const { setOpenModal, setClosedModal } = mainProductSlice.actions;

export default mainProductSlice.reducer;
