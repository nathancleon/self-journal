import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllJournalData,
  saveSelectedJournal
} from "../../actions/JournalActions";
import JournalSelected from "./JournalSelected/JournalSelected";
import { Container, ErrorMessage, Loading } from "./JournalListContainerStyles";

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
      //reversed the order of journal items so most recent journal entry displays in selectedJournal
      const journals = this.props.journal.all.reverse();
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
      return <Loading> Loading... </Loading>;
    }

    return (
      <Container>
        {/* <JournalList
            onJournalSelect={(selectedJournal, positionKey) => {
              selectedJournal.position = positionKey;
              this.props.saveSelectedJournal(selectedJournal);
            }}
            journals={journalData}
          /> */}
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
