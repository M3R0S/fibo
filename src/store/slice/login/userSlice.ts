import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserSlice } from "./types";

const initialState: IUserSlice = {
  isLogin: true,
  user: {
    id: null,
    email: null,
    password: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    }
  },
});

export const {setIsLogin, setUser} = userSlice.actions;

export default userSlice.reducer;
