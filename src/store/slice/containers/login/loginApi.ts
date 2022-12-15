import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { ILoginUserQuery, IUser } from "store/slice/constants/types";
import { BASE_URL } from "store/slice/constants/const";

const reducerPath = "loginApi";
const url = "/users"

export const loginApi = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: [reducerPath],
    endpoints: (build) => ({
        getUsers: build.query<IUser[], ILoginUserQuery>({
            query: ({ email }) => ({
                url,
                params: {
                    email,
                },
            }),
            providesTags: (result) => [reducerPath],
        }),
        postUser: build.mutation<IUser, IUser>({
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
