import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./auth/authSlice";
// import userReducer from "./auth/User";

export default configureStore({
  reducer: {
    login: loginReducer,
    // user: userReducer,
  },
});