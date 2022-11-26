import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ILoginUserQuery, IUser } from "./types";

const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  tagTypes: ["loginApi"],
  endpoints: (build) => ({
    getUsers: build.query<IUser[], ILoginUserQuery>({
      query: ({ email }) => ({
        url: "/users",
        params: {
          email,
        },
      }),
      providesTags: (result) => ["loginApi"],
    }),
    postUser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: (result) => ["loginApi"],
    }),
  }),
});

export const { usePostUserMutation, useLazyGetUsersQuery } = loginApi;

export default loginApi;
