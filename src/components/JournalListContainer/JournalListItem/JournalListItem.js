import React, { Component } from "react";
import moment from "moment";
import styled from "react-emotion";

const JListItem = styled("li")`
  {
    border-top: 1px solid #ddd;
    background-color: #fefefe;
  }
  &:hover {
    background-color: rgba(58, 94, 255, 0.1);
    transform: scale(1.2);
    margin-bottom: 3.9%;
  }
  &:last-of-type {
    border-bottom: 1px solid #ddd;
  }
   {
    padding: 30px;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    color: #222;
    font-size: 14px;
  }

  @media only screen and (max-width: 1200px) {
    {
      padding: 20px;
    }
    h4 {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 600px) {
    {
      padding: 30px;
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
