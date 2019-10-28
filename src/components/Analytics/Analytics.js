import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { fetchAllJournalData } from "../../actions/JournalActions";
import { Loading } from "../Loading/Loading";
import { promptData } from "../JournalListContainer/JournalSelected/PromptResponses/promptData";
import Chart from "./Chart";

class Analytics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentJournal: null,
      answerValues: {},
      answerTextValues: {},
      createdDate: "",
      isLoading: false,
      noJournal: true,
      lastMonth: []
    };
  }

  componentDidMount() {
    this.props.currentComponent("analytics");
    this.setState({
      isLoading: true
    });
    this.props.fetchAllJournalData().then(() => {
      //reversed the order of journal items so most recent journal entry displays in selectedJournal
      if (!this.props.journal || this.props.journal.length === 0) {
        this.setState({ noJournal: true, isLoading: false });
      } else {
        let journal = this.props.journal[0];
        this.setState({
          recentJournal: journal,
          createdDate: journal.created,
          answerValues: journal.answerValues,
          answerTextValues: journal.answerTextValues,
          isLoading: false,
          noJournal: false
        });
      }
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{ width: `500px`, height: `500px`, backgroundColor: "#fff" }}
        >
          <span>hello</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    journal: reduxState.journal.all
  };
};

export default connect(
  mapStateToProps,
  { fetchAllJournalData }
)(Analytics);
