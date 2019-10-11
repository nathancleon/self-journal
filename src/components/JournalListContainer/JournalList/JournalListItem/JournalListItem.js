import React, { Component } from "react";
import moment from "moment";
import { JListItem } from "./JournalListItemStyles";

class JournalListItem extends Component {
  render() {
    return (
      <JListItem
        onClick={() => {
          this.props.onJournalSelect(this.props.journal, this.props.position);
          this.props.triggerJournalList();
        }}
      >
        <p>{moment(this.props.journal.created).format("LL")}</p>
      </JListItem>
    );
  }
}

export default JournalListItem;
