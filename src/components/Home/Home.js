import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { fetchAllJournalData } from "../../actions/JournalActions";
import { Loading } from "../Loading/Loading";
import { promptData } from "../JournalListContainer/JournalSelected/PromptResponses/promptData";
import {
  HomeContainer,
  ContentContainer,
  RecentJournalHeader,
  RecentJournalTitle,
  RecentJournalDate,
  RecentJournal,
  RecentJournalData,
  JournalQuestion,
  JournalAnswer
} from "./HomeStyles";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentJournal: null,
      answerValues: {},
      answerTextValues: {},
      createdDate: "",
      isLoading: false,
      noJournal: false
    };
  }

  componentDidMount() {
    this.props.currentComponent("home");
    this.setState({
      isLoading: true
    });
    this.props.fetchAllJournalData().then(() => {
      //reversed the order of journal items so most recent journal entry displays in selectedJournal
      console.log(this.props.journal);
      if (this.props.journal.length === 0) {
        return;
      } else {
        let journal = this.props.journal[0];
        this.setState({
          recentJournal: journal,
          createdDate: journal.created,
          answerValues: journal.answerValues,
          answerTextValues: journal.answerTextValues,
          isLoading: false
        });
      }
    });
  }

  renderAnswers(questionIndex) {
    //this pulls just the user answer data (e.g. "answerSelf: Good")
    let journalAnswerArray = Object.values(this.state.answerValues);
    //only return answers if the question index is less than the answer array
    if (questionIndex < journalAnswerArray.length) {
      return journalAnswerArray[questionIndex];
    } else {
      return null;
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <HomeContainer>
        <ContentContainer>
          <RecentJournalHeader>
            <RecentJournalTitle>Most Recent Note</RecentJournalTitle>
            <RecentJournalDate>
              {moment(this.state.createdDate).format("LL")}
            </RecentJournalDate>
          </RecentJournalHeader>
          <RecentJournal>
            {Object.keys(promptData.data).map((key, index) => {
              if (index === Object.keys(promptData.data).length - 1) {
                return null;
              } else {
                return (
                  <RecentJournalData key={index}>
                    <JournalQuestion>
                      <h4>{promptData.data[key].question}</h4>
                    </JournalQuestion>
                    <JournalAnswer>
                      <h4>{this.renderAnswers(index)}</h4>
                    </JournalAnswer>
                  </RecentJournalData>
                );
              }
            })}
          </RecentJournal>
        </ContentContainer>
        <ContentContainer />
      </HomeContainer>
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
)(Home);
