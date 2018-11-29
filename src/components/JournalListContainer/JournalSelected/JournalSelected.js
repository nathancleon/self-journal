import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "react-emotion";
import PromptResponses from "./PromptResponses/PromptResponses";

const JSelected = styled("div")`
   {
    display: flex;
    justify-content: center;
    background-color: #fff;
    width: 60%;
    height: 88vh;
  }
  @media only screen and (max-width: 600px) {
    {
      width: 70%;
    }
  }
`;

class JournalSelected extends Component {

  render() {
    console.log(this.props.journal);
    if (!this.props.journal) {
      return (
        <JSelected>
          <div> You haven 't created a journal entry yet</div>{" "}
        </JSelected>
      );
    }

    return (
      <JSelected>
        <PromptResponses journal={this.props.journal} />{" "}
      </JSelected>
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
