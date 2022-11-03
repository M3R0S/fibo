import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMainPositionModalItemQuery, TMainPositionSlice } from "./types/mainPositionTypes";
  
  
  const initialState: TMainPositionSlice = {
    openModal: false,
    typeModal: '',
    idModal: '',
    loadingTime : null,
  };
  
  export const mainPositionSlice = createSlice({
    name: "mainProduct",
    initialState,
    reducers: {
      setOpenModalMainPosition: (state, action) => {
        state.openModal = true;
        [state.typeModal, state.idModal] = action.payload;
      },
      setClosedModalMainPosition: (state) => {
        state.openModal = false
      },
      setLoadingTime: (state, action) => {
          state.loadingTime = action.payload
      }
    },
  });
  
  export const {setLoadingTime, setOpenModalMainPosition, setClosedModalMainPosition} = mainPositionSlice.actions
  
  export default mainPositionSlice.reducer;
  