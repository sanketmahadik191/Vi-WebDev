import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:"",

    },
    reducers:{
        login:(state,action)=>{
            const { user ,token} = action.payload;
            state.user = user,
            localStorage.setItem("token",token);
        },
        logout:(state)=>{
            state.user = null;
            localStorage.removeItem("token");
        }
    }
});

export const { login ,logout} = authSlice.actions;

export default authSlice.reducer;