import axios from 'axios';

export function FetchUserInfo() {

  return (dispatch) => {
    const request = axios.get('http://localhost:5000/journal/all')
      .then((res) => {
        dispatch({
          type: 'FETCH_USER_INFO',
          payload: res
        });
      });
  }
}

export function FetchAuthUser() {
  return {
    type: 'AUTH_USER',
    payload: 'fetch user auth payload'
  }
}

export function loginUser(user) {

  return (dispatch) => {
    return axios.post('http://localhost:5000/auth/login', user)
    .then((res) => {
      dispatch({
        type: 'USER_LOGIN',
        payload: res
      })
    })
  }
}

export function registerUser(user) {

  return (dispatch) => {
    return axios.post('http://localhost:5000/auth/register', user)
    .then((res) => {
      console.log('this is the register user response' + res);
      dispatch({
        type: 'REGISTER_USER',
        payload: res
      })
    })
  }
}

export function logoutUser() {
  return {
    type: 'LOGOUT_USER',
  }
}

// export function SetUserInfo(data) {
//   return {
//     type: 'FETCH_USER_INFO',
//     payload: data
//   };
// }