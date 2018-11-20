import React, { Component } from 'react';
import moment from 'moment';
import styled from 'react-emotion';

const JListItem = styled("li")`
  {
    padding: 40px;
    cursor: pointer;
  }
  &:hover {
    background-color: #eee;
  }
  h1 {
    color: #222;
    font-size: 14px;
   }
`;

class JournalListItem extends Component {

  render() {
    return(

      <JListItem onClick={() => this.props.onJournalSelect(this.props.journal)}>
        <h1>{moment(this.props.journal.created).format("LLL")}</h1>
      </JListItem>
    )
  }
  
}

export default JournalListItem;