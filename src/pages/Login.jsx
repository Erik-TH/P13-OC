import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginPending, loginSuccess, loginRemember, loginError } from "../auth/authSlice";
import { userLogin } from "../services/userServices";


export default function Login() {
  useEffect(() => {
    document.title = "ArgentBank's login page";
  }, []);

  const { isLoading, isRemember } =useSelector((state) => state.login)

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })

  function handleChange({ currentTarget }) {
    const { value, name } = currentTarget
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    dispatch(loginPending())
    try {
      const isAuth = await userLogin(credentials)

      if (isRemember) {
        localStorage.setItem('token', isAuth.body.token)
      } else {
        localStorage.removeItem('token')
      }

      dispatch(loginSuccess())
      navigate('/profile')

    } catch (error) {
      console.log(error)
      dispatch(loginError(error.response.data.message))
    }
  }

  const content = (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="email" onChange={handleChange}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handleChange}/>
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" id="remember-me" name="remember-me" defaultChecked={isRemember} onChange={() => dispatch(loginRemember(!isRemember))}/>
          </div>

          <button
            type="submit"
            className="sign-in-button"
            variant="success"       
          >
            Sign In
          </button>
          {isLoading && (
            <span>Loading</span>
          )}

        </form>
      </section>
    </main>
  )

  return content
}
