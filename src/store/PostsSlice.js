import {createSlice} from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: []
    },
    reducers: {
        postsInfo: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const { postsInfo } = postsSlice.actions

export default postsSlice.reducer;