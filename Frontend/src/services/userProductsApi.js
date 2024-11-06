import api from "./api";

export const userProductsApi = api.injectEndpoints({
   endpoints:builder => ({
      // query to get produts
      getProuducts:builder.query({
         query:({ offset, limit }) => ({
            url:`/api/getProducts?offset=${offset}&limit=${limit}`
         })
      }),
      getProduct:builder.query({
        query:(id) => ({
          url:`/api/getProduct/${id}`
        })
      })
   }),
   overrideExisting:false
});

export const { useLazyGetProuductsQuery, useGetProductQuery } = userProductsApi;