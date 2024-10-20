import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   token:null,
   isAuthenticated:false,
   adminToken:null,
   isAdminAuthenticated:false
};

const authSlice = createSlice({
   name:'auth',
   initialState,
   reducers:{
      setCredentials:(state,action) => {
         const accessToken = action.payload;
         state.token = accessToken;
         state.isAuthenticated = true;
      },
      setAdminCredentials:(state,action) => {
         const accessToken = action.payload
         state.adminToken = accessToken,
         state.isAdminAuthenticated = true;
      },
      logOut:(state) => {
         state.token = null;
         state.isAuthenticated = false;
      },
      adminLogOut:(state) => {
         state.adminToken = null,
         state.isAdminAuthenticated = false
      }
   }
});

export const {setCredentials,logOut,setAdminCredentials,adminLogOut} = authSlice.actions;

export default authSlice.reducer;