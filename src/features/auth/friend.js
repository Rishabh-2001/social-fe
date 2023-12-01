import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

const BASE_URL=process.env.REACT_APP_BASE_URL;


const initialState={
    state:{
        isFetching:false,
        isLoading:false,
    },
    friendList:{
        friends:[],
        friendsList: []
    },
    error:""
}

export const addFriend=createAsyncThunk('friends/add', async (friendsData,thunkAPI)=>{
    try{
        // console.log("POSTS::",postData);
       const resp=await axios.post(`${BASE_URL}/friends/add`, friendsData)
       return resp.data;
    }
    catch(err){  
        return thunkAPI.rejectWithValue(err?.response?.data?.error)
    }
})

export const getAllFriendReq= createAsyncThunk ('friends/all', async (friendsPayload, thunkAPI)=>{
    const {userId}=friendsPayload
    try {
         const apiRes= await axios.get(`${BASE_URL}/friends/${userId}/all`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
              }
      })
         return apiRes.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data?.error)
    }
})
export const getAllFriendS= createAsyncThunk ('friends/allFriends', async (friendsPayload, thunkAPI)=>{
    const {userId}=friendsPayload
    try {
         const apiRes= await axios.get(`${BASE_URL}/friends/${userId}/friends`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
              }
      })
         return apiRes.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data?.error)
    }
})

export const respondFriendReq= createAsyncThunk('friends/respond', async (friendsPayload, thunkAPI)=>{
    try {
        const apiRes= await axios.post(`${BASE_URL}/friends/respond`, friendsPayload)
        return apiRes.data;
   } catch (error) {
       return thunkAPI.rejectWithValue(error?.response?.data?.error)
   }
})

const friendSlice=createSlice({
    name:"friends",
    initialState,
    reducers:{},
    extraReducers:{
        [addFriend.pending]:(state)=>{
            state.state.isFetching=true
            state.state.isLoading=true;
        },
        [addFriend.fulfilled]:(state,action)=>{
            console.log("Sucessssssss ", action?.payload);
            state.state.isFetching=false
            state.state.isLoading=false
            // state?.friendList?.friends=action?.payload;
        },
        [addFriend.rejected]:(state)=>{
            state.isLoading=false;
            console.log("FAILED:",state);
        },

        [getAllFriendReq.pending]:(state)=>{
            state.state.isFetching=true
            state.state.isLoading=true;
        },
        [getAllFriendReq.fulfilled]:(state,action)=>{
            console.log("Sucessssssss ", action?.payload);
            state.state.isFetching=false
            state.state.isLoading=false
            state.friendList.friends=action?.payload;
        },
        [getAllFriendReq.rejected]:(state)=>{
            state.isLoading=false;
            console.log("FAILED:",state);
        },
        [respondFriendReq.pending]:(state)=>{
            state.state.isFetching=true
            state.state.isLoading=true;
        },
        [respondFriendReq.fulfilled]:(state,action)=>{
            console.log("Sucessssssss ", action?.payload);
            state.state.isFetching=false
            state.state.isLoading=false
            // state?.friendList?.friends=action?.payload;
        },
        [respondFriendReq.rejected]:(state)=>{
            state.isLoading=false;
            console.log("FAILED:",state);
        },
        [getAllFriendS.pending]:(state)=>{
            state.state.isFetching=true
            state.state.isLoading=true;
        },
        [getAllFriendS.fulfilled]:(state,action)=>{
            console.log("Sucessssssss ", action?.payload);
            state.state.isFetching=false
            state.state.isLoading=false
            state.friendList.friendsList=action?.payload;
        },
        [getAllFriendS.rejected]:(state)=>{
            state.isLoading=false;
            console.log("FAILED:",state);
        },


    }
})



  export default friendSlice.reducer;
  