import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllJournalData,
  saveSelectedJournal
} from "../../actions/JournalActions";
import JournalList from "./JournalList/JournalList";
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
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    this.props.fetchAllJournalData().then(() => {
      this.setState({
        //reversed the order of journal items so most recent journal entry displays in selectedJournal
        journalData: this.props.journal.all,
        isLoading: false
      });
    });
  }

  render() {
    const { journalData, isLoading, error } = this.state;
    const linksArray = ["prompts", "log out"];

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
        {isLoading ? <Loading /> : <JournalSelected />}
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
