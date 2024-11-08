import api from "./api";

export const userProductsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // query to get produts
    getProuducts: builder.query({
      query: ({ offset, limit }) => ({
        url: `/api/getProducts?offset=${offset}&limit=${limit}`,
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/api/getProduct/${id}`,
      }),
    }),
    addToCart: builder.mutation({
      query: (credentials) => ({
        url: "/api/addToCart",
        method: "POST",
        body: credentials,
      }),
    }),
    getCart: builder.query({
      query: () => ({
        url: "/api/getCart",
      }),
    }),
    updateCart: builder.mutation({
      query: (credentials) => ({
        url: "/api/updateCart",
        method: "PATCH",
        body: credentials,
      }),
    }),
    removeCartProduct:builder.mutation({
      query:(credentials) => ({
        url:'/api/removeCartProduct',
        method:'DELETE',
        body:credentials
      }),
    }),
    placeOrder:builder.mutation({
      query:credentials => ({
        url:'/api/placeOrder',
        method:"POST",
        body:credentials
      })
    })
  }),
  overrideExisting: false,
});

export const {
  useLazyGetProuductsQuery,
  useGetProductQuery,
  useAddToCartMutation,
  useGetCartQuery,
  useUpdateCartMutation,
  useRemoveCartProductMutation,
  usePlaceOrderMutation
} = userProductsApi;
