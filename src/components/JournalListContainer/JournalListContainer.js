import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchAllJournalData } from "../../actions/JournalActions";
import JournalList from "./JournalList/JournalList";
import JournalSelected from "./JournalSelected/JournalSelected";
import styled from "react-emotion";

const JLContainer = styled("div")`
  display: flex;
  width: 100%;
  height: 92vh;
`;

class JournalListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journalData: [],
      selectedJournal: null,
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    axios
      .get(
        "http://localhost:5000/journal/all?token=" +
          localStorage.getItem("token")
      )
      .then(result => {
        this.setState({
          journalData: result.data.data,
          selectedJournal: result.data.data[0],
          isLoading: false
        });
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  render() {
    const { journalData, selectedJournal, isLoading, error } = this.state;

    if (error) {
      return <p> {error.message} </p>;
    }

    if (isLoading) {
      return <p> Loading... </p>;
    }

    return (
      <JLContainer>
        <JournalList
          onJournalSelect={selectedJournal =>
            this.setState({
              selectedJournal
            })
          }
          journals={journalData}
        />{" "}
        <JournalSelected journal={selectedJournal} />{" "}
      </JLContainer>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    journal: reduxState.journal
  };
};

export default connect(
  mapStateToProps,
  {
    fetchAllJournalData
  }
)(JournalListContainer);
