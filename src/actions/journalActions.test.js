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
      answerTextSelf: "sgfsdgs",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxMTFAZ21haWwuY29tIiwiaWQiOiI1YmU0Nzk5NzdhNzc1MTRlOTQwZmFiNGYiLCJpYXQiOjE1NDE4MjA0NjR9.B8C00ozfZz23wgmBedclhZS4VBPzdTxPHI1vLEhx_-o",
      userID: "5be479977a77514e940fab4f"
    }
      const action = saveSelectedJournal(journalData);
      expect(action.type).toEqual("SELECT_ONE_JOURNAL")
  });
});