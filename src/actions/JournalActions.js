import axios from "axios";

export function saveJournalData(journalData) {
  console.log(journalData);
  return dispatch => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + journalData.token
    };

    let data = JSON.stringify({ journalData });
    console.log("this is saveJournalData " + data.journalData);

    // const instance = axios.create({
    //   baseURL: 'http://localhost:5000/',
    //   timeout: 1000,
    //   headers: headers
    // })
    axios
      .post(
        "http://localhost:5000/journal/submit?token=" + journalData.token,
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
      Authorization: "Bearer " + journalData.token
    };

    let data = JSON.stringify({ journalData });
    axios
      .put(
        "http://localhost:5000/journal/one/" + data.userID + "?token=" + journalData.token,
        data,
        {
          headers: headers
        }
      )
      .then(res => {
        console.log("this is the put response" + res);
        dispatch({
          type: "UPDATE_JOURNAL_DATA",
          payload: res.data
        });
      });
  };
}

export function fetchAllJournalData() {
  return dispatch => {
    axios
      .get(
        "http://localhost:5000/journal/all?token=" +
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
