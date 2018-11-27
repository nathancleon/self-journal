import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchAllJournalData } from "../../actions/JournalActions";
import Header from "../Headers/Header";
import JournalList from "./JournalList/JournalList";
import JournalSelected from "./JournalSelected/JournalSelected";
import styled from "react-emotion";

const JLContainer = styled("div")`
  display: flex;
  width: 100%;
  height: 92vh;
`;

class JournalListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journalData: [],
      selectedJournal: null,
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    this.props.fetchAllJournalData().then(() => {
      const sortedJournalItems = this.props.journal.sort((date1, date2) => {
        return new Date(date2.created) - new Date(date1.created)
       });
        this.setState({
          //reversed the order of journal items so most recent journal entry displays in selectedJournal
          journalData: sortedJournalItems,
          selectedJournal: sortedJournalItems[0],
          isLoading: false
        });
      });
  }

  render() {
    const { journalData, selectedJournal, isLoading, error } = this.state;
    const linksArray = ["prompts", "log out"];

    if (error) {
      return <p> {error.message} </p>;
    }

    if (isLoading) {
      return <p> Loading... </p>;
    }

    return (
      <div>
        <Header links={linksArray} />
        <JLContainer>
          <JournalList
            onJournalSelect={selectedJournal =>
              this.setState({
                selectedJournal
              })
            }
            journals={journalData}
          />{" "}
          <JournalSelected journal={selectedJournal} />{" "}
        </JLContainer>
      </div>
      
    );
  }
}

const mapStateToProps = reduxState => {
  console.log(reduxState.journal);
  return {
    journal: reduxState.journal.all
  };
};

export default connect(
  mapStateToProps,
  {
    fetchAllJournalData
  }
)(JournalListContainer);
