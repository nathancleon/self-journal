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
            <p>You haven't created a journal entry yet</p>
            <a href="/dashboard/prompts">Get Started</a>
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
          triggerJournalList={this.props.triggerJournalList}
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
