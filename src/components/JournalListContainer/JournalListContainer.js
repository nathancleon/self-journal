import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllJournalData, saveSelectedJournal } from "../../actions/JournalActions";
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
     
        this.setState({
          //reversed the order of journal items so most recent journal entry displays in selectedJournal
          journalData: this.props.journal.all,
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
            onJournalSelect={(selectedJournal, positionKey) => 
            {

              selectedJournal.position = positionKey
              this.props.saveSelectedJournal(selectedJournal);
            }}
            journals={journalData}
          />
          <JournalSelected />
        </JLContainer>
      </div>
      
    );
  }
}

const mapStateToProps = reduxState => {
  console.log(reduxState.journal);
  return {
    journal: reduxState.journal,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchAllJournalData, saveSelectedJournal
  }
)(JournalListContainer);
