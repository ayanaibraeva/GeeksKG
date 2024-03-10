import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    token: null,
    id: null,
    password: '',
    error: ''
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { email, token, id } = action.payload;
            state.email = email;
            state.token = token;
            state.id = id;
            state.error = '';
        },
        removeUser: (state) => {
            state.email = '';
            state.token = null;
            state.id = null;
            state.error = '';
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload.password;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});

export const { setUser, removeUser, setError, setPassword, setEmail } = userSlice.actions;

export default userSlice.reducer;
