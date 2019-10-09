import React, { Component } from "react";
import { connect } from "react-redux";
import { colors } from "../../globalStyles";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import moment from "moment";
import { fetchAllJournalData } from "../../actions/JournalActions";
import { Loading } from "../Loading/Loading";
import { promptData } from "../JournalListContainer/JournalSelected/PromptResponses/promptData";
import {
  HomeContainer,
  ContentContainer,
  ChartContainer,
  RecentJournalHeader,
  RecentJournalTitle,
  RecentJournalDate,
  RecentJournal,
  RecentJournalData,
  JournalQuestion,
  JournalAnswer,
  NoJournal
} from "./HomeStyles";

const data = [
  { self: Math.floor(Math.random() * 5) + 1, date: "07/1/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/2/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/3/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/4/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/5/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/6/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/7/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/8/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/9/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/10/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/11/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/12/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/13/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/14/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/15/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/16/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/17/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/18/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/19/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/20/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/21/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/22/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/23/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/24/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/25/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/26/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/27/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/28/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/29/19" },
  { self: Math.floor(Math.random() * 5) + 1, date: "07/30/19" }
];
const yAxis = [1, 2, 3, 4, 5];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentJournal: null,
      answerValues: {},
      answerTextValues: {},
      createdDate: "",
      isLoading: false,
      noJournal: true
    };
  }

  componentDidMount() {
    this.props.currentComponent("home");
    this.setState({
      isLoading: true
    });
    if (!this.state.journal || this.state.journal.length === 0) {
      this.setState({ noJournal: true, isLoading: false });
    }
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
          isLoading: false,
          noJournal: false
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
        {this.state.noJournal ? (
          <NoJournal>
            <p>No Journal Entries yet, click below to get started!</p>
            <a href="/dashboard/prompts">Get Started</a>
          </NoJournal>
        ) : (
          <>
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
            <ChartContainer>
              <ResponsiveContainer>
                <LineChart
                  data={data}
                  yAxis={yAxis}
                  margin={{ top: 5, right: 30, bottom: 15, left: -30 }}
                >
                  <Line
                    type="monotone"
                    stroke={colors.main}
                    dataKey="self"
                    activeDot={{ r: 6 }}
                  />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <Tooltip viewBox={{ x: 0, y: 0, width: 10, height: 10 }} />
                  <XAxis label="January" dataKey="date" tick={false} />
                  <YAxis type="number" domain={yAxis} allowDecimals={false} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </>
        )}
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
