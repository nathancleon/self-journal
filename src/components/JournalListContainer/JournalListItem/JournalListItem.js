import React, { Component } from "react";
import moment from "moment";
import styled from "react-emotion";

const JListItem = styled("li")`
   {
    padding: 40px;
    cursor: pointer;
  }
  &:hover {
    background-color: #eee;
  }
  h3 {
    color: #222;
    font-size: 14px;
  }

  @media only screen and (max-width: 1200px) {
    {
      padding: 30px;
    }
    h4 {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 600px) {
    {
      padding: 30px 10px;
    }
    h4 {
      font-size: 10px;
    }
  }
`;

class JournalListItem extends Component {
  render() {
    return (
      <JListItem onClick={() => this.props.onJournalSelect(this.props.journal, this.props.position)}>
        <h4>{moment(this.props.journal.created).format("LL")}</h4>
      </JListItem>
    );
  }
}

export default JournalListItem;
