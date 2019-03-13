import React, { Component } from "react";
import JournalListItem from "../JournalListItem/JournalListItem";
import styled from "react-emotion";

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
          {
          this.props.journals.length !== 0
            ? journalItemsRender
            : NoItemsAvailable
          }
        </ul>
      </JList>
    );
  }
}

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
    z-index: 1;
  }

  @media only screen and (max-width: 1200px) {
      ul {
        margin-top: 76px;
      }
      ul li:hover {
        margin-bottom: 8px;
      }
    }

  @media only screen and (max-width: 600px) {
    ul {
        margin-top: 74px;
      }
    ul li:hover {
      padding-left: 15px;
    }
  }
`;

const ListLabel = styled("div")`
   {
    text-align: center;
    padding: 35px;
    width: 100%;
    position: absolute;
    background-color: #fefefe;
    border-bottom: 1px solid #ddd;
    z-index: 20;
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

const NoItems = styled('p')`
  {
    padding-top: 30px;
    padding-left: 15px;
  }
  @media only screen and (max-width: 1200px) {
      {
        font-size: 12px;
      }
    }

  @media only screen and (max-width: 600px) {
    {
      font-size: 10px;
    }
  }
`;

export default JournalList;
