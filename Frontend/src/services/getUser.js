import api from "./api";

export const getUserApi = api.injectEndpoints({
   endpoints:builder => ({
      // query to get users
      getUser:builder.query({
         query:() => ({
            url:'/api/getUser'
         })
      }),
   }),
   overrideExisting:false
});

export const {useGetUserQuery} = getUserApi;
