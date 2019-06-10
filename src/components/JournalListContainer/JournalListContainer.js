import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllJournalData,
  saveSelectedJournal
} from "../../actions/JournalActions";
import JournalSelected from "./JournalSelected/JournalSelected";
import Loading from "../Loading/Loading";
import { Container, ErrorMessage } from "./JournalListContainerStyles";

class JournalListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journalData: [],
      selectedJournal: null,
      isLoading: false
    };

    this.changeSelectedJournal = this.changeSelectedJournal.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    this.props.fetchAllJournalData().then(() => {
      console.log(this.props.journal);
      //reversed the order of journal items so most recent journal entry displays in selectedJournal
      const journals = this.props.journal.all;
      console.log(journals[0]);
      this.setState({
        journalData: journals,
        selectedJournal: journals[0],
        isLoading: false
      });
    });
  }

  changeSelectedJournal(journal) {
    this.setState({
      selectedJournal: journal
    });
  }

  render() {
    const { journalData, selectedJournal, isLoading, error } = this.state;

    if (error) {
      return <ErrorMessage> {error.message} </ErrorMessage>;
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <JournalSelected
            journal={selectedJournal}
            changeJournal={this.changeSelectedJournal}
            journalData={journalData}
          />
        )}
      </Container>
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
    fetchAllJournalData,
    saveSelectedJournal
  }
)(JournalListContainer);
