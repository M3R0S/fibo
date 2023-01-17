import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, UserSlice } from "./types";

const initialState: UserSlice = {
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
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
