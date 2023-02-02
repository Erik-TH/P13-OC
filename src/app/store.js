import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "../features/auth/authSlice";
import profileReducer from "../features/user/profileSlice"

export default configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
});