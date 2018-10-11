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

// export function SetUserInfo(data) {
//   return {
//     type: 'FETCH_USER_INFO',
//     payload: data
//   };
// }