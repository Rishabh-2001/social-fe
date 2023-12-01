import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const BASE_URL="http://localhost:3434/api";

const BASE_URL=process.env.REACT_APP_BASE_URL;
const initialState={
    state:{
        isFetching:false,
        isLoading:false,

    },
    data: {
        profileData: [],
    }
}

export const getMyProfile = createAsyncThunk(
    'profile/getProfile/:id',
    async (userId, thunkAPI) => {
        
      try {
        const response = await axios.get(`${BASE_URL}/profile/getProfile/${userId}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
              }
      });
        console.log("API RESPONSE DATA:", response);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
    }
  );

  export const saveProfile=createAsyncThunk('profile/save', async (profile,thunkAPI)=>{
    try{
        console.log("PRofile>>>>>",profile);
       const resp=await axios.post(`${BASE_URL}/profile/setProfile`, profile)
       return resp.data;
    }
    catch(err){
        console.log("ERR:",err);
        return thunkAPI.rejectWithValue(err?.response?.data?.error)
    }
})


const profileSlice=createSlice({
    name:"profile",
    initialState,
    reducers:{},
    extraReducers:{
        [getMyProfile.pending]:(state)=>{
            state.state.isFetching=true
            state.state.isLoading=true;
        },
        [getMyProfile.fulfilled]:(state,action)=>{
             
            state.state.isFetching=false
            state.state.isLoading=false
            state.data.profileData=action?.payload
        },
        [getMyProfile.rejected]:(state)=>{
            state.isLoading=false;
        },
    }
})





export default profileSlice.reducer;
