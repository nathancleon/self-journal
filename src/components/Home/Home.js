import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { colors } from "../../globalStyles";
import moment from "moment";
import { fetchAllJournalData } from "../../actions/JournalActions";
import Loading from "../Loading/Loading";
import { promptData } from "../JournalListContainer/JournalSelected/PromptResponses/promptData";

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
    const { isLoading } = this.state;
    if (isLoading) {
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
                    <JournalQuestion key={index}>
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

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fafafaf;
`;

const ContentContainer = styled.div`
  width: 550px;
  height: 525px;
  padding: 20px 50px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  overflow-y: scroll;
`;

const RecentJournalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RecentJournalTitle = styled.h2`
  font-size: 1.25rem;
  color: #5b5b5b;
`;

const RecentJournalDate = styled.p`
  display: block;
  margin: auto 0;
  font-size: 1.25rem;
  color: #888;
`;

const RecentJournal = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const RecentJournalData = styled.div`
  display: flex;
  flex-direction: column;
`;

const JournalQuestion = styled.div`
  h4 {
    display: inline-block;
    font-size: 0.75rem;
    background-color: ${colors.main};
    color: #fff;
    border-radius: 25px;
    padding: 5px 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const JournalAnswer = styled.div`
  h4 {
    display: inline-block;
    font-size: 0.7rem;
    background-color: #eee;
    color: #555;
    border-radius: 25px;
    padding: 5px 15px;
  }
`;

const mapStateToProps = reduxState => {
  return {
    journal: reduxState.journal.all
  };
};

export default connect(
  mapStateToProps,
  { fetchAllJournalData }
)(Home);
