const InitialState = {
  user: '',
  name: ''
};

const UserReducer = (state = InitialState, action) => {
  switch(action.type) {
    case "FETCH_USER_INFO": 
      debugger;
      console.log("fetch user info reducer");
      return { ...state, name: action.payload.data.message};
    case "AUTH_USER": 
      console.log('fetch user auth');
      return state;
    default: 
      return state;
  }
};

export default UserReducer;