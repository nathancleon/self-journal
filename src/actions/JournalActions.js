import axios from 'axios';

export function saveJournalData(journalData) {
  return (dispatch) => {
    debugger;
    const request = axios.post('http://localhost:5000/journal/submit', journalData)
      .then((res) => {
        dispatch({
          type: 'SAVE_JOURNAL_DATA',
          payload: res.data
        });
      });
  }
}