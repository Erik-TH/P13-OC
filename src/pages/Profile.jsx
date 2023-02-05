import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { userDatas, userUpdateName } from "../services/userServices";
import {
  profileFirstName,
  profileLastName,
  profileError,
  profilePending,
} from "../features/user/profileSlice";
import axios from "axios";

const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
}

export default function Profile() {
  const dispatch = useDispatch();
  const localStorageFirstName = localStorage.getItem("firstName");
  const localStorageLastName = localStorage.getItem("lastName");
  const { firstName, lastName } = useSelector((state) => state.profile);
  const { isRemember } = useSelector((state) => state.login);

  useEffect(() => {
    document.title = "ArgentBank's Profile page";
  }, []);

  useEffect(() => {
    if (localStorageFirstName && localStorageLastName) {
      dispatch(profileFirstName(localStorageFirstName));
      dispatch(profileLastName(localStorageLastName));
    }
  }, [dispatch, localStorageFirstName, localStorageLastName]);

  userDatas()
    .then((data) => {
      dispatch(profileFirstName(data.body.firstName));
      dispatch(profileLastName(data.body.lastName));

      if (isRemember) {
        localStorage.setItem("firstName", data.body.firstName);
        localStorage.setItem("lastName", data.body.lastName);
      } else {
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
      }
    })
    .catch((error) => dispatch(profileError(error.response.data.message)));

  const [editBtn, setEditBtn] = useState("");
  const [userFullName, setUserFullName] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange({ currentTarget }) {
    const { value, name } = currentTarget;
    setUserFullName({
      ...userFullName,
      [name]: value,
    });
  }

  function editUserBtn(e) {
    e.preventDefault();
    setEditBtn((current) => !current);
  }

  async function submitHandler(e) {
    e.preventDefault();
    dispatch(profilePending());

    try {
      const newUser = await userUpdateName(userFullName);
      dispatch(profileFirstName(newUser.body.firstName));
      dispatch(profileLastName(newUser.body.lastName));
      setEditBtn((current) => !current);
    } catch (error) {
      dispatch(profileError(error.response.data.message));
    }
  }

  const content = (
    <>
      {!editBtn ? (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {firstName + " " + lastName} !
            </h1>
            <button className="edit-button" onClick={editUserBtn}>
              Edit Name
            </button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      ) : (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {firstName + " " + lastName} !
            </h1>

            <form className="editNameForm" onSubmit={submitHandler}>
              <div>
                <input
                  type="text"
                  className=""
                  placeholder={firstName}
                  name="firstName"
                  onChange={handleChange}
                  required
                />

              </div>

              <div>
                <input
                  type="text"
                  className=""
                  placeholder={lastName}
                  name="lastName"
                  onChange={handleChange}
                  required
                />

              </div>
                <button className="edit-button" type="submit">
                  Save
                </button>
                <button className="edit-button" onClick={editUserBtn}>
                  Cancel
                </button>
            </form>
          </div>

          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      )}
    </>
  );

  return content;
}
