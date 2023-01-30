import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    document.title = "ArgentBank's login page";
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticatedUser = useSelector((state) => state.auth);

  useEffect(() => {
    if(isAuthenticatedUser) {
      navigate("/profile")
    }
  }, [isAuthenticatedUser, navigate])

  return (
    <main class="main bg-dark">
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
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
