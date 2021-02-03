import axios from "axios";

export const setAuthToken = (token) => {

  axios.defaults.baseURL = "https://nijin-task-manager-app.herokuapp.com/"
  axios.defaults.headers["Content-Type"] = "application/json"

  if (token) {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
  } else {
    axios.defaults.headers.common = null ;
  }
};

export default axios;
