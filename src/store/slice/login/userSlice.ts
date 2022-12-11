import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserSlice } from "../types";

const initialState: IUserSlice = {
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
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
