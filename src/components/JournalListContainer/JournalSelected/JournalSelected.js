import React, { Component } from "react";
import { connect } from "react-redux";
import PromptResponses from "./PromptResponses/PromptResponses";
import {
  JournalSelectedContainer,
  NoJournalEntries
} from "./JournalSelectedStyles";

class JournalSelected extends Component {
  render() {
    if (!this.props.journal) {
      return (
        <JournalSelectedContainer>
          <NoJournalEntries>
            You haven't created a journal entry yet
          </NoJournalEntries>
        </JournalSelectedContainer>
      );
    }

    return (
      <JournalSelectedContainer>
        <PromptResponses
          journal={this.props.journal}
          changeJournal={this.props.changeJournal}
          journalData={this.props.journalData}
          updateJournalData={this.props.updateJournalData}
        />
      </JournalSelectedContainer>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    journal: reduxState.journal.selected
  };
};
export default connect(
  mapStateToProps,
  null
)(JournalSelected);
