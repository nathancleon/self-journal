import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "react-emotion";
import PromptResponses from "./PromptResponses/PromptResponses";

const journal_selected = css`
   {
    display: flex;
    justify-content: center;
    background-color: #fff;
    width: 60%;
  }
  @media only screen and (max-width: 600px) {
    {
      width: 70%;
    }
  }
`;

class JournalSelected extends Component {

  render() {
    if (!this.props.journal) {
      return (
        <div className={journal_selected}>
          <div> You haven 't created a journal entry yet</div>{" "}
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
