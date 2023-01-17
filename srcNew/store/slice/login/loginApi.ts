import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { BASE_URL } from "utils/const";
import { LoginUserQuery, User } from "./types";


const reducerPath = "loginApi";
const url = "/users";

export const loginApi = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: [reducerPath],
    endpoints: (build) => ({
        getUsers: build.query<User[], LoginUserQuery>({
            query: ({ email }) => ({
                url,
                params: {
                    email,
                },
            }),
            providesTags: (result) => [reducerPath],
        }),
        postUser: build.mutation<User, User>({
            query: (user) => ({
                url,
                method: "POST",
                body: user,
            }),
            invalidatesTags: (result) => [reducerPath],
        }),
    }),
});

export const {
    usePostUserMutation,
    useLazyGetUsersQuery,
    reducer: loginApiReducer,
    reducerPath: loginApiReducerPath,
    middleware: loginApiMiddleware,
} = loginApi;
