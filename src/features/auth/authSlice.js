import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuth: false,
    isRemember: false,
    error: "",
}

const authSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginPending: (state) => {
            state.isLoading = true
        },
        loginSuccess: (state) => {
            state.isLoading = false
            state.isAuth = true
            state.error = ""
        },
        loginError: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        loginRemember: (state, action) => {
            state.isRemember = action.payload
        },
        logOut: (state) => {
            state.isAuth = false
            localStorage.removeItem('token')
        },
    },
})

const { actions, reducer } = authSlice
export const {
    loginPending,
    loginSuccess,
    loginError,
    loginRemember,
    logOut,
} = actions
export default reducer