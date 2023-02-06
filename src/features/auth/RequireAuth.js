import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "./authSlice";

export default function RequireAuth() {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')

    if (token) {
        dispatch(loginSuccess())
    }
    const { isAuth } = useSelector((state) => state.login)
    return isAuth ? <Outlet /> : <Navigate to="/login" />
}