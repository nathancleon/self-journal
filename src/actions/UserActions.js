import axios from "axios";

//If developing locally, use localhost
//If not, use 2nd for production
//Comment out url not being used
// const API_URL = "http://localhost:5000";
const API_URL = "https://mentalnote-server.herokuapp.com";

export function FetchUserInfo() {
  return dispatch => {
    return axios.get(`${API_URL}/journal/all`).then(res => {
      dispatch({
        type: "FETCH_USER_INFO",
        payload: res
      });
    });
  };
}

export function loginUser(user) {
  return dispatch => {
    return axios.post(`${API_URL}/auth/login`, user).then(res => {
      
      dispatch({
        type: "USER_LOGIN",
        payload: res
      });
    })
    .catch(error => {
      dispatch({
        type: "USER_LOGIN_ERROR",
        payload: error.response.data.message
      })
    });
  };
}

export function registerUser(user) {
  return dispatch => {
    return axios.post(`${API_URL}/auth/register`, user).then(res => {
      console.log("this is the register user response" + res);
      dispatch({
        type: "REGISTER_USER",
        payload: res
      })
    })
    .catch(error => {
      debugger;
      dispatch({
        type: "USER_LOGIN_ERROR",
        payload: error.response.data.message
      })
    });
  };
}

export function setUserInfo() {
  return {
    type: "SET_USER"
  };
}

export function logoutUser() {
  console.log('userAction ran');
  return  {
      type: "LOGOUT_USER"
    }
}