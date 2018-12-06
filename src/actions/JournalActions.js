import axios from "axios";


//If developing locally, use localhost
//If not, use 2nd for production
//Comment out url not being used
const API_URL = "http://localhost:5000";
// const API_URL = "";

export function saveJournalData(journalData) {
  console.log(journalData);
  return dispatch => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    };

    let data = JSON.stringify({ journalData });

   return axios.post(
        `${API_URL}/journal/submit?token=` + localStorage.getItem("token"),
        data,
        {
          headers: headers
        }
      )
      .then(res => {
        console.log("this is the post response" + res);
        dispatch({
          type: "SAVE_JOURNAL_DATA",
          payload: res.data
        });
      });
  };
}

export function updateJournalData(journalData) {
  console.log('UpdateJournalData' + journalData);
  return dispatch => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    };

    let data = JSON.stringify({ ...journalData });
    debugger;
    return axios.put(
        `${API_URL}/journal/one/` + journalData._id + "?token=" + localStorage.getItem("token"),
        data,
        {
          headers: headers
        }
      )
      .then(res => {
        debugger;
        console.log("this is the put response" + res);
        dispatch({
          type: "UPDATE_JOURNAL_DATA",
          payload: {
            journal: res.data,
            position: journalData.position
          }
        });
      });
  };
}

export function deleteJournalEntry(journalData) {
  return dispatch => {

    return axios.delete(
      `${API_URL}/journal/one/` + journalData._id + "?token=" + localStorage.getItem("token"),
      {
        params: {
          id: journalData._id
        }
      }
    )
    .then(res => {
      dispatch({
        type: "DELETE_JOURNAL_DATA",
        payload: {
          message: res.data.message,
          position: journalData.position
        }
      });
    });
  };
}

export function saveSelectedJournal(journal) {
  return {
    type: "SELECT_ONE_JOURNAL",
    payload: journal
  };
}

export function fetchAllJournalData() {
  return dispatch => {
    return axios.get(
        `${API_URL}/journal/all?token=` +
          localStorage.getItem("token")
      )
      .then(res => {
        dispatch({
          type: "FETCH_JOURNAL_DATA",
          payload: res.data
        });
      });
  };
}
