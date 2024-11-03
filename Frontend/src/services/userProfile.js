import api from "./api";

export const userProfileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // query to get user
    getUser: builder.query({
      query: () => ({
        url: "/api/getUser",
      }),
    }),
    // mutation update user
    updateUser: builder.mutation({
      query: (credentials) => ({
        url: "/api/updateUser",
        method: "PUT",
        body: credentials,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserQuery, useUpdateUserMutation } = userProfileApi;
