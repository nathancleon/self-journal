import React, { Component } from "react";
import JournalListItem from "../JournalListItem/JournalListItem";
import styled from "react-emotion";

const JList = styled("div")`
   {
    border-right: 1px solid #ddd;
    background-color: #fefefe;
    width: 30%;
  }
  ul li {
    border-top: 1px solid #ddd;
  }
  ul li:last-child {
    border-bottom: 1px solid #ddd;
  }
`;

const ListLabel = styled("div")`
   {
    text-align: center;
    padding: 35px;
  }
`;

class JournalList extends Component {
  render() {
    //sort items in data by descending order and render each item to JournalListItem component
    const sortedJournalItems = this.props.journals.sort((date1, date2) => {
       return new Date(date2.created) - new Date(date1.created)
      });
    const journalItemsRender = sortedJournalItems.map((element, index) => {
      return (
        <JournalListItem
          onJournalSelect={this.props.onJournalSelect}
          key={index}
          journal={element}
        />
      );
    });

    const NoItemsAvailable = <p>No journal entries available</p>;

    return (
      <JList>
        <ListLabel>
          <h4>List of Journal Entries</h4>
        </ListLabel>
        <ul>
          {
          this.props.journals.length !== 0
            ? journalItemsRender
            : NoItemsAvailable}
        </ul>
      </JList>
    );
  }
}

export default JournalList;
