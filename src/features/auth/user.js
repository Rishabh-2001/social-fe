import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

// const BASE_URL = "http://localhost:3434/api";

const BASE_URL=process.env.REACT_APP_BASE_URL;

const initialState={
    state: {
        isFetching: false,
    },
    user:{
      name:"",
      isAuthenticated:false,
      userId:''
},
}

const registerState={
  state:{
    isFetching:false
  },
  user:{
    name:"guest",
    isRegistered:false,
    email: ''
  },
  isLoading:false,

}

export const registerUser=createAsyncThunk('auth/register',async (registerData,thunkAPI)=>{
  try {
     const resp=await axios.post(`${BASE_URL}/auth/register`,registerData)
     return resp;
  } catch (error) {

    return thunkAPI.rejectWithValue(error?.response?.data?.error)
  }
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setIsFetching : (state) => {
          state.state.isFetching = true;
    }, 
      setUser: (state,action)=>{
  
        state.user.name=action.payload.username;
        state.user.userId=action.payload.userId;
        state.user.isAuthenticated=action.payload.isAuthenticated;
      },

    },
    extraReducers:{
      [registerUser.pending]:(state)=>{
        state.isLoading=true
      },
      [registerUser.fulfilled]:(state,action)=>{
     
        state.isLoading=false;
        state.isRegistered=true;
      },
      [registerUser.rejected]:(state)=>{
        state.isLoading=false;
      }
    }

  });

  export const {
    setIsFetching,
    setUser
  } = userSlice.actions;

  export default userSlice.reducer;
  