import api from "./api";

export const userProductsApi = api.injectEndpoints({
   endpoints:builder => ({
      // query to get produts
      getProuducts:builder.query({
         query:() => ({
            url:'/api/getProducts'
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

export const { useGetProuductsQuery, useGetProductQuery } = userProductsApi;