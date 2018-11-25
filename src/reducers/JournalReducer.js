const InitialState = {
  all: ""
};

const JournalReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SAVE_JOURNAL_DATA":
      console.log("save journal reducer");
      localStorage.getItem("token");
      return state;
    case "UPDATE_JOURNAL_DATA":
      console.log("update journal reducer");
      localStorage.getItem("token");
      return state;
    case "FETCH_JOURNAL_DATA":
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
};

export default JournalReducer;
