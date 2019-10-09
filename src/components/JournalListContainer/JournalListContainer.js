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
      isLoading: false,
      expand: false,
      noJournals: false
    };

    this.changeSelectedJournal = this.changeSelectedJournal.bind(this);
    this.triggerJournalList = this.triggerJournalList.bind(this);
  }

  componentDidMount() {
    this.props.currentComponent("journals");

    this.setState({
      isLoading: true
    });

    this.props.fetchAllJournalData().then(() => {
      //reversed the order of journal items so most recent journal entry displays in selectedJournal
      const journals = this.props.journal.all;
      if (journals.length === 0) {
        this.setState({
          noJournals: true,
          isLoading: false
        });
      } else {
        this.setState({
          journalData: journals,
          selectedJournal: journals[0],
          isLoading: false
        });
      }
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

  triggerJournalList() {
    if (this.state.expand === false) {
      this.setState({
        expand: true
      });
    } else {
      this.setState({
        expand: false
      });
    }
  }

  render() {
    const {
      journalData,
      selectedJournal,
      isLoading,
      expand,
      noJournals
    } = this.state;

    if (noJournals) {
      return (
        <ErrorMessage>
          <p>You haven't created a journal entry yet</p>
          <a href="/dashboard/prompts">Get started</a>
        </ErrorMessage>
      );
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <Container>
        <JournalListWrapper expand={expand}>
          <JournalList
            onJournalSelect={(selectedJournal, positionKey) => {
              selectedJournal.position = positionKey;
              this.props.saveSelectedJournal(selectedJournal);
            }}
            journals={journalData}
            triggerJournalList={this.triggerJournalList}
          />
        </JournalListWrapper>
        <JournalSelected
          journal={selectedJournal}
          changeJournal={this.changeSelectedJournal}
          journalData={journalData}
          updateJournalData={this.updateJournalData}
          expand={expand}
          triggerJournalList={this.triggerJournalList}
        />
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
