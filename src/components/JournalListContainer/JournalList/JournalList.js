import React, { Component } from "react";
import JournalListItem from "../JournalListItem/JournalListItem";
import { JList, ListLabel, NoItems } from "./JournalListStyles";

class JournalList extends Component {
  render() {
    //sort items in data by descending order and render each item to JournalListItem component
    const journalItemsRender = this.props.journals.map((element, index) => {
      return (
        <JournalListItem
          onJournalSelect={this.props.onJournalSelect}
          key={index}
          journal={element}
          position={index}
        />
      );
    });

    const NoItemsAvailable = <NoItems>No journal entries available</NoItems>;

    return (
      <JList>
        <ListLabel>
          <h4>Journal Entries</h4>
        </ListLabel>
        <ul>
          {this.props.journals.length !== 0
            ? journalItemsRender
            : NoItemsAvailable}
        </ul>
      </JList>
    );
  }
}

export default JournalList;
