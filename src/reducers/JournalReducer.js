const InitialState = {
  all: ''
};

const JournalReducer = (state = InitialState, action) => {
  switch(action.type) {
    case "SAVE_JOURNAL_DATA": 
      console.log("save journal reducer");
      return state;
    default: 
      return state;
  }
};

export default JournalReducer;