import { saveSelectedJournal } from './JournalActions';


describe('saveSelectedJournal', () => {
  it('Should return the action', () => {
    const journalData = {
      answerAnxiety: "text",
      answerConcentration: "text",
      answerDepression: "text",
      answerFamily: "text",
      answerFriendships: "text",
      answerSelf: "text",
      answerTextAnxiety: "sdgfsdgsdgf",
      answerTextConcentration: "sdfgsdgf",
      answerTextDepression: "sdgfsdfgsdf",
      answerTextFamily: "sdfgsdgf",
      answerTextFriendships: "sdgfsdfg",
      answerTextSelf: "sgfsdgs"
    }
      const action = saveSelectedJournal(journalData);
      expect(action.type).toEqual("SELECT_ONE_JOURNAL")
  });
});