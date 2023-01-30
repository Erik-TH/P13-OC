import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import argentBankLogo from "../assets/argentBankLogo.png";

export default function Header() {
  const isAuthenticatedUser = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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

        {isAuthenticatedUser ? (
          <div>
            <NavLink to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Name
            </NavLink>

            <NavLink
              to="/"
              className="main-nav-item"
              onClick={(event) => {
                event.preventDefault();
                dispatch({ type: "logoutUser" });
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
