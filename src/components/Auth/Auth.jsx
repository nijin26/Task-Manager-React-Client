import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import * as actions from "../../store/actions/index";
import Notifications from "../Notifications/Notifications";

import classes from './Auth.module.scss'

function Auth() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const { name, email, password } = input;

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onAuth = (e) => {
    e.preventDefault();

    const SignUpData = {
      name,
      email,
      password,
    };

    const LoginData = {
      email,
      password,
    };

    if (!isSignUp) {
      dispatch(actions.onAuth(isSignUp, LoginData));
    } else {
      dispatch(actions.onAuth(isSignUp, SignUpData));
    }
  };

  const toggleAuth = () => {
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <>
      {auth.token && <Redirect to="/" />}
      {auth?.error && (
        <Notifications title={"Error"} message={auth?.error} type={"danger"} />
      )}
      <div className={classes.container}>
        <form className="form" onSubmit={(e) => onAuth(e)}>
          <div className="field">
            {isSignUp && (
              <div className="control">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="input is-primary"
                  onChange={(e) => changeHandler(e)}
                  required
                />
              </div>
            )}
            <div className="control">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                className="input is-primary"
                onChange={(e) => changeHandler(e)}
                required
              />
            </div>
            <div className="control">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                className="input is-primary"
                onChange={(e) => changeHandler(e)}
                required
              />
            </div>

            <div className="btn">
              <button
                type="submit"
                className={`button is-primary add ${
                  auth.loading ? "is-loading" : ""
                }`}
                onClick={(e) => onAuth(e)}
              >
                {isSignUp ? "SignUp" : "Login"}
              </button>
              <Link
                className="button is-danger is-light"
                onClick={() => toggleAuth()}
              >
                {isSignUp
                  ? "Do you have an account? Login Now"
                  : "Create Your Account"}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Auth;
