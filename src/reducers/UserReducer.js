const InitialState = {
  user: '',
  name: ''
};

const UserReducer = (state = InitialState, action) => {
  switch(action.type) {
    case "FETCH_USER_INFO":
      console.log("fetch user info reducer");
      return { ...state, name: action.payload.data.message};
    case "AUTH_USER": 
      console.log('fetch user auth');
      return state;
    case "USER_LOGIN":
      localStorage.setItem('token', action.payload.data.data.token);
      localStorage.setItem('id', action.payload.data.data.id);
      return { ...state, user: action.payload.data.data};
    case "REGISTER_USER":
      console.log('register user reducer payload' + action.payload.data);
      return { ...state, user: action.payload.data.data};
    case "LOGOUT_USER":
      localStorage.removeItem('token', action.payload.data.data.token);
      localStorage.removeItem('id', action.payload.data.data.id);
      return {...state, user: ''};
    default: 
      return state;
  }
};

export default UserReducer;