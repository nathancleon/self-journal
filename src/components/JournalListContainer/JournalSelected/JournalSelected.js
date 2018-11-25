import React, { Component } from "react";
import styled from "react-emotion";
import PromptResponses from "./PromptResponses/PromptResponses";

const JSelected = styled("div")`
   {
    display: flex;
    justify-content: center;
    background-color: #fff;
    width: 70%;
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

export default JournalSelected;
