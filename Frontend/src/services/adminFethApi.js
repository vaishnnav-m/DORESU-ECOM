import adminApi from "./adminApi";

const adminFetchApi = adminApi.injectEndpoints({
  endpoints: (builder) => ({
    // mutation for login admin
    loginAdmin: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    // query to get accesstoken
    adminRefreshToken: builder.query({
      query: () => "/refresh",
      transformResponse: (response) => response.accessToken,
    }),
    // query to get users
    getUsers: builder.query({
      query: () => ({
        url: "/getUsers",
      }),
      providesTags: ["getUsers"],
    }),
    // mutation for update user
    updateUser: builder.mutation({
      query: (credentials) => ({
        url: "/updateStatus",
        method: "PUT",
        body: credentials,
      }),
      invalidatesTags: ["getUsers"],
    }),
    // mutation for addCategory
    addCategory: builder.mutation({
      query: (credentials) => ({
        url: "/addCategory",
        method: "POST",
        body: credentials,
      }),
    }),
    //query to get categories
    getCategories: builder.query({
      query: () => ({
        url: "/getCategories",
      }),
      providesTags: ["getCategory"],
    }),
    // mutation for update Category Status
    updateCategoryStatus: builder.mutation({
      query: (credentials) => ({
        url: "/updateCategoryStatus",
        method: "PUT",
        body: credentials,
      }),
      invalidatesTags: ["getCategory"],
    }),
    // mutation for update Category
    updateCategory: builder.mutation({
      query:credentials => ({
        url:'/updateCategory',
        method:"PUT",
        body:credentials
      }),
      invalidatesTags: ["getCategory"]
    })
  }),
  overrideExisting: false,
});

export const {
  useLoginAdminMutation,
  useAdminRefreshTokenQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryStatusMutation,
  useUpdateCategoryMutation
} = adminFetchApi;
