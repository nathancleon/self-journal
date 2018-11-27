const InitialState = {
  user: "",
  name: ""
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.setItem("token", action.payload.data.data.token);
      localStorage.setItem("id", action.payload.data.data.id);
      return { ...state, user: action.payload.data.data };
    case "REGISTER_USER":
    localStorage.removeItem('token');
      localStorage.removeItem('id');
     localStorage.setItem("token", action.payload.data.data.token);
      localStorage.setItem("id", action.payload.data.data.id);
      return { ...state, user: action.payload.data.data };
    case "LOGOUT_USER":
      console.log('userReducer ran');
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      console.log("user logged out");
      return state;
    default:
      return state;
  }
};

export default UserReducer;
