import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectIsAuthenticatedUser } from "../selectors";

export default function Login() {
  useEffect(() => {
    document.title = "ArgentBank's login page";
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticatedUser = useSelector(selectIsAuthenticatedUser);

  useEffect(() => {
    if(isAuthenticatedUser) {
      navigate("/profile")
    }
  }, [isAuthenticatedUser, navigate])

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button
            className="sign-in-button"
            onClick={(event) => {
              event.preventDefault();
              dispatch({type: "loginUser"})
            }}         
          >
            Sign In
          </button>

        </form>
      </section>
    </main>
  );
}
