import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
// import Login from "../../components/auth/Login";
const BASE_URL=process.env.REACT_APP_BASE_URL;
const initialState={
    state:{
        isFetching:false,
        isLoading:false,
    },
    data:{
       user:"",
       body:"",
    },
    postData:{
        posts:[]
    },
    userPostData:{
        posts:[]
    },
    error:""
}



export const writePost=createAsyncThunk('posts/write', async (postData,thunkAPI)=>{
    try{
        // console.log("POSTS::",postData);
       const resp=await axios.post(`${BASE_URL}/posts/write`, postData)
       return resp.data;
    }
    catch(err){
        console.log("ERR:",err);
        return thunkAPI.rejectWithValue(err?.response?.data?.error)
    }
})
export const getAllPosts = createAsyncThunk(
    'posts/getAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(`${BASE_URL}/posts/all`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
              }
      } );
        console.log("RESP>>", response);
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
    }
  );
  export const getMyPosts = createAsyncThunk(
    'posts//my-posts/:id',
    async (userId, thunkAPI) => {
      try {
        const response = await axios.get(`${BASE_URL}/posts//my-posts/${userId}`,{
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
  
  


  export const toLike=createAsyncThunk('likes', async (likeData,thunkAPI)=>{
    try{
        // console.log("POSTS::",postData);
       const resp=await axios.post(`${BASE_URL}/likes`, likeData)
       return resp.data;
    }
    catch(err){
        console.log("ERR:",err);
        return thunkAPI.rejectWithValue(err?.response?.data?.error)
    }
})
export const toComment=createAsyncThunk('comments', async (commentData,thunkAPI)=>{
    try{
     
       const resp=await axios.post(`${BASE_URL}/comments`, commentData)
       return resp.data;
    }
    catch(err){
     
        return thunkAPI.rejectWithValue(err?.response?.data?.error)
    }
})






const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:{
        [writePost.pending]:(state)=>{
            state.state.isFetching=true
            state.state.isLoading=true;
        },
        [writePost.fulfilled]:(state,action)=>{
            state.state.isFetching=false
            state.state.isLoading=false
            // state.postData.posts.push(action.payload);
            
            
        },
        [writePost.rejected]:(state)=>{
            state.isLoading=false;
        },

        [getAllPosts.pending]:(state)=>{
            state.state.isFetching=true
            state.state.isLoading=true;
        },
        [getAllPosts.fulfilled]:(state,action)=>{
         
            state.state.isFetching=false
            state.state.isLoading=false
            state.postData.posts=action?.payload
        },
        [getAllPosts.rejected]:(state)=>{
            state.isLoading=false;
        },

        [toLike.pending]:(state)=>{
            state.state.isFetching=true
            state.state.isLoading=true;
        },
        [toLike.fulfilled]:(state,action)=>{
         
            state.state.isFetching=false
            state.state.isLoading=false
            console.log("AFter like:", action?.payload);
            // state.postData.posts=action?.payload
        },
        [toLike.rejected]:(state)=>{
            state.isLoading=false;
        },
        [getMyPosts.pending]:(state)=>{
            state.state.isFetching=true
            state.state.isLoading=true;
        },
        [getMyPosts.fulfilled]:(state,action)=>{
         
            state.state.isFetching=false
            state.state.isLoading=false
            state.userPostData.posts=action?.payload
        },
        [getMyPosts.rejected]:(state)=>{
            state.isLoading=false;
        },

        
        [toComment.pending]:(state)=>{
            state.state.isFetching=true
            state.state.isLoading=true;
        },
        [toComment.fulfilled]:(state,action)=>{
            state.state.isFetching=false
            state.state.isLoading=false
            // state.postData.posts=action?.payload
        },
        [toComment.rejected]:(state)=>{
            state.isLoading=false;
        },
    }
})




export default postSlice.reducer;
