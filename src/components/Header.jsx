import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import argentBankLogo from "../assets/argentBankLogo.png";
import { useEffect } from "react";

import { profileFirstName } from "../features/user/profileSlice"
import { logOut } from "../features/auth/authSlice";

export default function Header() {

  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login)
  const { firstName } = useSelector((state) => state.profile)
  const localStorageFirstName = localStorage.getItem('firstName')

  useEffect(() => {
    if (localStorageFirstName) {
      dispatch(profileFirstName(localStorageFirstName))
    }
  }, [dispatch, localStorageFirstName])


  return (
    <header className="component header">
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            src={argentBankLogo}
            alt="ArgentBank's logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

         {isAuth ? (
          <div>
            <NavLink to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </NavLink>

            <NavLink
              to="/"
              className="main-nav-item"
              onClick={(event) => {
                event.preventDefault();
                dispatch(logOut());
              }}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          </div>
        )} 
      </nav>
    </header>
  );
}
