const InitialState = {
  user: "",
  name: "",
  error: ""
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.setItem("token", action.payload.data.data.token);
      localStorage.setItem("id", action.payload.data.data.id);
      return { ...state, user: action.payload.data.data };
    case "USER_LOGIN_ERROR":
      return { ...state, error: action.payload };
    case "REGISTER_USER":
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.setItem("token", action.payload.data.data.token);
      localStorage.setItem("id", action.payload.data.data.id);
      return { ...state, user: action.payload.data.data };
    case "USER_REGISTER_ERROR":
      return { ...state, error: action.payload };
    case "SET_USER":
      return { ...state, user: { token: localStorage.getItem("token"), id: localStorage.getItem("id") } };
    case "LOGOUT_USER":
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      return state;
    default:
      return state;
  }
};

export default UserReducer;
