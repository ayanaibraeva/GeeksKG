import { configureStore } from "@reduxjs/toolkit"
import postsReducer from './PostsSlice'
import userSlice from "./userSlice";
import contactsReducer from './ContactsSlice'
export const store = configureStore({
    reducer: {
        postsReducer,
        userSlice,
        contactsReducer
    }
})