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
`;

class JournalListItem extends Component {
  render() {
    return (
      <JListItem onClick={() => this.props.onJournalSelect(this.props.journal, this.props.position)}>
        <h3>{moment(this.props.journal.created).format("LL")}</h3>
      </JListItem>
    );
  }
}

export default JournalListItem;
