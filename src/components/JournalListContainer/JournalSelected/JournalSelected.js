import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "react-emotion";
import PromptResponses from "./PromptResponses/PromptResponses";

class JournalSelected extends Component {

  render() {
    if (!this.props.journal) {
      return (
        <div className={journal_selected}>
          <div className={no_journal__entries}> You haven 't created a journal entry yet</div>{" "}
        </div>
      );
    }

    return (
      <div className={journal_selected}>
        <PromptResponses journal={this.props.journal} />{" "}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    journal: reduxState.journal.selected
  };
};

export default connect(
  mapStateToProps, null
)(JournalSelected);

const journal_selected = css`
   {
    display: flex;
    justify-content: center;
    background-color: #fff;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    {
      width: 70%;
    }
  }
`;

const no_journal__entries = css`
  {
    margin-top: 10vh;
  }
`;