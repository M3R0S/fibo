import { createSlice } from "@reduxjs/toolkit";
import { TMainProductSlice } from "./types/mainProductTypes";
  
  
  const initialState: TMainProductSlice = {
    loadingTime: null,
  };
  
  export const mainProductSlice = createSlice({
    name: "mainProduct",
    initialState,
    reducers: {
      setLoadingTime: (state, action) => {
          state.loadingTime = action.payload
      }
    },
  });
  
  export const {setLoadingTime} = mainProductSlice.actions
  
  export default mainProductSlice.reducer;
  