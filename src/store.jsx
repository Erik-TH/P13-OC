import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/Auth";
import userReducer from "./auth/User";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});