import React, { Component } from "react";
import JournalListItem from "../JournalListItem/JournalListItem";
import styled from "react-emotion";

const JList = styled("div")`
   {
    border-right: 1px solid #ddd;
    background-color: #fefefe;
    width: 20%;
    position: relative;
    overflow-y: scroll;
  }
  ul{
    margin-top: 80px;
  }
  ul li {
    border-top: 1px solid #ddd;
    background-color: #fefefe;
  }
  ul li:last-child {
    border-bottom: 1px solid #ddd;
  }

  @media only screen and (max-width: 1200px) {
      ul {
        margin-top: 76px;
      }
    }

  @media only screen and (max-width: 600px) {
    ul {
        margin-top: 74px;
      }
  }
`;

const ListLabel = styled("div")`
   {
    text-align: center;
    padding: 35px;
    width: 20%;
    position: fixed;
    top: 80px;
    background-color: #fefefe;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }

  @media only screen and (max-width: 1200px) {
      {
        padding: 30px;
      }
      h4 {
        font-size: 14px;
      }
    }

  @media only screen and (max-width: 600px) {
    {
      padding: 30px 10px;
    }
    h4 {
      font-size: 12px;
    }
  }
`;

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

    const NoItemsAvailable = <p>No journal entries available</p>;

    return (
      <JList>
        <ListLabel>
          <h4>Journal Entries</h4>
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
