import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllJournalData,
  saveSelectedJournal
} from "../../actions/JournalActions";
import JournalSelected from "./JournalSelected/JournalSelected";
import JournalList from "./JournalList/JournalList";
import { Loading } from "../Loading/Loading";
import {
  Container,
  ErrorMessage,
  JournalListWrapper
} from "./JournalListContainerStyles";

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
    this.props.currentComponent("journals");
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

  updateJournalData(index) {
    let newJournalData = this.state.journalData.splice(index, 1);
    this.setState({
      journalData: newJournalData
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
        <JournalListWrapper>
          <JournalList
            onJournalSelect={(selectedJournal, positionKey) => {
              selectedJournal.position = positionKey;
              this.props.saveSelectedJournal(selectedJournal);
            }}
            journals={journalData}
          />
        </JournalListWrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <JournalSelected
            journal={selectedJournal}
            changeJournal={this.changeSelectedJournal}
            journalData={journalData}
            updateJournalData={this.updateJournalData}
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
