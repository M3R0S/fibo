import { createSlice } from "@reduxjs/toolkit"

export type TPizzaDoughInfo = "традиционное" | "тонкое";
export type TPizzaSizeInfo = 25 | 31 | 40;

type TpizzaModal = {
  pizzaSize: TPizzaSizeInfo;
  pizzaDough: TPizzaDoughInfo;
  pizzaWeightProduct: number;
  pizzaPrice: number
  activeVariant: number 
};

const initialState: TpizzaModal = {
  pizzaSize: 25,
  pizzaDough: "традиционное",
  pizzaWeightProduct: 0,
  pizzaPrice: 0,
  activeVariant: 1
};

export const pizzaModalSlice = createSlice({
  name: "pizzaModal",
  initialState,
  reducers: {
    setPizzaSize: (state, action) => {
      state.pizzaSize = action.payload;
    },
    setPizzaWeightProduct: (state, action) => {
      state.pizzaWeightProduct = action.payload;
    },
    setPizzaDough: (state, action) => {
      state.pizzaDough = action.payload;
    },
    setPizzaPrice: (state, action) => {
      state.pizzaPrice = action.payload
    }
  },
});

export default pizzaModalSlice.reducer

export const { setPizzaDough, setPizzaSize, setPizzaWeightProduct, setPizzaPrice } =
  pizzaModalSlice.actions;