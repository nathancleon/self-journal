const InitialState = {
  all: ''
};

const JournalReducer = (state = InitialState, action) => {
  switch(action.type) {
    case "SAVE_JOURNAL_DATA": 
      console.log("save journal reducer");
      console.log('journal reducer state ' + state);
      return state;
    default: 
      return state;
  }
};

export default JournalReducer;