import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAdminCredentials } from "../store/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api/admin",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const adminToken = getState().auth.adminToken;
    if (adminToken) headers.set("authorization", `Bearer ${adminToken}`);

    return headers;
  },
});

const baseQueryWithReauth = async (arg, api, extraOptions) => {
  let result = baseQuery(arg, api, extraOptions);
  if (result?.error?.status === 401) {
    console.log("sending admin refresh");
    const adminRefresh = await baseQuery(
      "/refresh",
      api,
      extraOptions
    );
    if (adminRefresh?.data) {
      const token = adminRefresh.data.accessToken;
      api.dispatch(setAdminCredentials(token));
      result = await baseQuery(arg, api, extraOptions);
    } else {
      if (adminRefresh?.error?.status === 401) {
        adminRefresh.error.data.message = "Your login has expired";
      }
      return adminRefresh;
    }
  }
  return result;
};

const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: baseQueryWithReauth,
  tagTypes:['getUsers'],
  endpoints: () => ({}),
});

export default adminApi;
