import axios from 'axios';

export function FetchUserInfo() {

  return (dispatch) => {
    const request = axios.get('https://content.guardianapis.com/search?q=debates&api-key=test')
      .then((res) => {
        dispatch(SetUserInfo(res));
      });
  }
}

export function FetchAuthUser() {
  return {
    type: 'AUTH_USER',
    payload: 'fetch user auth payload'
  }
}

export function SetUserInfo(data) {
  return {
    type: 'FETCH_USER_INFO',
    payload: data
  };
}