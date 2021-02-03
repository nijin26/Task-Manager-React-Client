import * as actionTypes from "./actionTypes";
import axios, { setAuthToken } from "../../utils/axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const onLogout = () => {
  localStorage.removeItem("token");
  setAuthToken();
  return {
    type: actionTypes.ON_LOGOUT,
  };
};

export const onAuth = (isSignUp, data) => {
  return (dispatch) => {
    dispatch(authStart());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

   const authData = JSON.stringify(data);

   let url = '/users/login'

   if(isSignUp){
     url = '/users'
   }

    axios
      .post(url, authData, config)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        dispatch(authSuccess(res.data.token));
      })
      .catch((e) => {
        dispatch(authFail(e));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(onLogout());
    } else {
      setAuthToken(token);
      dispatch(authSuccess(token));
    }
  };
};
