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
        notificationsData: [],
    }
}

export const getMyNotifications = createAsyncThunk(
    'notifications/my-notification/:id',
    async (userId, thunkAPI) => {
      try {
        const response = await axios.get(`${BASE_URL}/notifications/my-notification/${userId}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
              }
      });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
    }
  );
const notificationSlice=createSlice({
    name:"notification",
    initialState,
    reducers:{},
    extraReducers:{
        [getMyNotifications.pending]:(state)=>{
            state.state.isFetching=true
            state.state.isLoading=true;
        },
        [getMyNotifications.fulfilled]:(state,action)=>{
         
            state.state.isFetching=false
            state.state.isLoading=false
            state.data.notificationsData=action?.payload
        },
        [getMyNotifications.rejected]:(state)=>{
            state.isLoading=false;
        },
    }
})





export default notificationSlice.reducer;
