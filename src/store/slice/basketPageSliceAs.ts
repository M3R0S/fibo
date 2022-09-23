import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { sleep } from "../../helpers/sleep";
import {
  TPizzaDoughInfo,
  TPizzaSizeInfo,
} from "./pizzaModalSlice";

type TdeleleBasketItem = {
  // typeProduct: string;
  // idProduct: number;
  id?: number;
};

export type TpostBasketItem = {
  typeProduct: string;
  idProduct: number;
  title: string;
  pText: string;
  price: number;
  img: string;
  pizzaDough?: TPizzaDoughInfo;
  pizzaSize?: TPizzaSizeInfo;
  pizzaWeightProduct?: number;
  id?: number;
};

type TpostBasketList = {
  list: TpostBasketItem[];
  totalPrice: number;
  error: string | undefined;
  loading: boolean | null;
  deleteLoading: boolean | null;
  idLoading: number | null;
};

const initialState: TpostBasketList = {
  list: [],
  totalPrice: Number(localStorage.getItem("price")) || 0,
  error: undefined,
  loading: null,
  deleteLoading: null,
  idLoading: null,
};

export const postBasketItemPizza = createAsyncThunk<
  number,
  TpostBasketItem,
  { rejectValue: string }
>(
  "basketPage/postBasketItemPizza",
  async (
    {
      typeProduct,
      idProduct,
      title,
      img,
      pText,
      price,
      pizzaDough,
      pizzaSize,
      pizzaWeightProduct,
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post("http://localhost:4000/basket", {
        typeProduct,
        idProduct,
        title,
        img,
        pText,
        price,
        pizzaDough,
        pizzaSize,
        pizzaWeightProduct,
      });
      return res.data.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Ошибка загрузки");
    }
  }
);

export const postBasketItem = createAsyncThunk<
  number,
  TpostBasketItem,
  { rejectValue: string }
>(
  "basketPage/postBasketItem",
  async (
    { typeProduct, idProduct, title, img, pText, price },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post("http://localhost:4000/basket", {
        typeProduct,
        idProduct,
        title,
        img,
        pText,
        price,
      });
      return res.data.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Ошибка загрузки");
    }
  }
);
export const getBasketList = createAsyncThunk<
  TpostBasketItem[],
  undefined,
  { rejectValue: string }
>("basketPage/getBasketList", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get("http://localhost:4000/basket");
    sleep(2000);
    return res.data;
  } catch (error) {
    return rejectWithValue("Ошибка загрузки");
  }
});

export const deleteBasketList = createAsyncThunk<
  any,
  TdeleleBasketItem,
  { rejectValue: string }
>("basketPage/deleteBasketList", async ({ id }, { rejectWithValue }) => {
  try {
    const res = await axios.delete(`http://localhost:4000/basket/${id}`);
    return res.data;
  } catch (error) {
    return rejectWithValue("Ошибка загрузки");
  }
});

export const basketPageSlice = createSlice({
  name: "basketPage",
  initialState,
  reducers: {
    increaseTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
      localStorage.setItem("price", state.totalPrice.toString());
    },
    decreaseTotalPrice: (state, action) => {
      state.totalPrice -= action.payload;
      localStorage.setItem("price", state.totalPrice.toString());
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBasketList.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getBasketList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(deleteBasketList.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(deleteBasketList.fulfilled, (state, action) => {
        state.deleteLoading = false;
        state.idLoading = action.payload;
      })
      .addCase(getBasketList.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = null;
      });
  },
});

export default basketPageSlice.reducer;

export const { decreaseTotalPrice, increaseTotalPrice } =
  basketPageSlice.actions;
