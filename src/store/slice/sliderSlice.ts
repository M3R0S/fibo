import { createSlice } from "@reduxjs/toolkit";
import yellowPoster from "../../assets/image/interactive-card1.png";
import blackPoster from "../../assets/image/interactive-card2.png";
import yellowPosterRed from "../../assets/image/interactive-card3.png";
import blackPosterRed from "../../assets/image/interactive-card4.png";

type TSliderItem = {
    id: number
    src: string
}

type TSlideList = {
  list: TSliderItem[]
};

const initialState: TSlideList = {
  list: [
    {id: 1, src: blackPosterRed}, 
    {id: 2, src: yellowPoster}, 
    {id: 3, src: blackPoster}, 
    {id: 4, src: yellowPosterRed}
  ],
};

// export const getSlide = createAsyncThunk

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    swipeRigth: (state) => {
      state.list = state.list.map((item, index, array) =>
        item = array[index + 1]
          ? (item = array[index + 1])
          : (item = array[0])
      );
    },
    swipeLeft: (state) => {
      state.list = state.list.map(
        (item, index, array) =>
          (item = array[index - 1]
            ? (item = array[index - 1])
            : (item = array[array.length - 1]))
      );
    },
  },
});

export default sliderSlice.reducer;

export const { swipeRigth, swipeLeft } = sliderSlice.actions;
