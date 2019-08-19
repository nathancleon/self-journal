import React, { Component } from "react";
import moment from "moment";
import { JListItem } from "./JournalListItemStyles";

class JournalListItem extends Component {
  render() {
    return (
      <JListItem
        onClick={() =>
          this.props.onJournalSelect(this.props.journal, this.props.position)
        }
      >
        <h4>{moment(this.props.journal.created).format("LL")}</h4>
      </JListItem>
    );
  }
}

export default JournalListItem;
