import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import PromptResponses from "./PromptResponses/PromptResponses";

class JournalSelected extends Component {
  render() {
    if (!this.props.journal) {
      return (
        <JournalSelectedContainer>
          <NoJournalEntries>
            You haven 't created a journal entry yet
          </NoJournalEntries>
        </JournalSelectedContainer>
      );
    }

    return (
      <JournalSelectedContainer>
        <PromptResponses journal={this.props.journal} />
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

const JournalSelectedContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  max-height: 100%;
`;

const NoJournalEntries = styled.div`
  margin-top: 10vh;
`;
