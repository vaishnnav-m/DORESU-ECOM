import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('userToken') || null;

const initialState = {
   token:token,
   isAuthenticated:!!token,
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
         localStorage.removeItem("userToken");
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