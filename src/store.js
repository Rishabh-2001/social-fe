import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/auth/user'
import postReducer from './features/auth/post'
import friendReducer from './features/auth/friend'
import notificationReducer from './features/auth/notifications'
import profileReducer from './features/auth/profile'


export default configureStore({
    reducer:{
        user:userReducer,
        post:postReducer,
        friend: friendReducer,
        notifications: notificationReducer,
        profile: profileReducer,

    },
})

