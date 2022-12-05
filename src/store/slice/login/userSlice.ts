import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserSlice } from "./types";

const initialState: IUserSlice = {
  isAuthorized: false,
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
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setIsAuthorized, setUser } = userSlice.actions;

export default userSlice.reducer;
