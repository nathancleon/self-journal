const InitialState = {
  all: "",
  selected: ""
};

const JournalReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SAVE_JOURNAL_DATA":
      console.log("save journal reducer");
      localStorage.getItem("token");
      return state;
    case "SELECT_ONE_JOURNAL":
      return {...state, selected: action.payload }
    case "UPDATE_JOURNAL_DATA":
      debugger;
      return { ...state, all: state.all, selected: action.payload.journal };
    case "FETCH_JOURNAL_DATA":
      return { ...state, all: action.payload.data, selected: action.payload.data[0] };
    case "DELETE_JOURNAL_DATA":
      debugger;
      state.all.splice(action.payload.position, 1)
      return { ...state, all: state.all, selected: state.all[0]};
    default:
      return state;
  }
};

export default JournalReducer;
