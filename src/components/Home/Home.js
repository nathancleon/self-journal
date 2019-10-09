import React, { Component } from "react";
import { connect } from "react-redux";
import { colors } from "../../globalStyles";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Label,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import moment from "moment";
import { fetchAllJournalData } from "../../actions/JournalActions";
import { Loading } from "../Loading/Loading";
import { promptData } from "../JournalListContainer/JournalSelected/PromptResponses/promptData";
import { data } from "./data";
import {
  HomeContainer,
  ContentContainer,
  ChartContainer,
  SelectDate,
  RecentJournalHeader,
  RecentJournalTitle,
  RecentJournalDate,
  RecentJournal,
  RecentJournalData,
  JournalQuestion,
  JournalAnswer,
  NoJournal
} from "./HomeStyles";

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
      noJournal: true,
      lastMonth: []
    };
  }

  componentDidMount() {
    this.props.currentComponent("home");
    this.setState({
      isLoading: true
    });
    this.props.fetchAllJournalData().then(() => {
      //reversed the order of journal items so most recent journal entry displays in selectedJournal
      if (!this.props.journal || this.props.journal.length === 0) {
        this.setState({ noJournal: true, isLoading: false });
      } else {
        let journal = this.props.journal[0];
        const startOfMonth = moment().startOf("month");
        const today = moment();
        const dataLastMonth = data.filter(item => {
          return (
            new Date(item.date) <= new Date(today) &&
            new Date(item.date) >= new Date(startOfMonth)
          );
        });
        console.log(today);
        this.setState({
          recentJournal: journal,
          createdDate: journal.created,
          answerValues: journal.answerValues,
          answerTextValues: journal.answerTextValues,
          isLoading: false,
          noJournal: false,
          lastMonth: dataLastMonth
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
              <SelectDate>
                <select>
                  <option value="CurrentMonth">Current Month</option>
                  <option value="LastMonth">Last Month</option>
                  <option value="PastThreeMonths">Past Three Months</option>
                  <option value="PastSixMonths">Past Six Months</option>
                  <option value="PastYear">Past Year</option>
                </select>
              </SelectDate>
              <ResponsiveContainer>
                <LineChart
                  data={this.state.lastMonth}
                  yAxis={yAxis}
                  margin={{ top: 10, right: 0, bottom: 40, left: 0 }}
                >
                  <Line
                    type="monotone"
                    stroke={colors.main}
                    dataKey="self"
                    activeDot={{ r: 8 }}
                    strokeWidth={3}
                    isAnimationActive={false}
                  />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <Tooltip viewBox={{ x: 0, y: 0, width: 10, height: 10 }} />
                  <XAxis dataKey="date" tick={false}>
                    <Label
                      value="Overall Mental Health"
                      offset={-10}
                      position="bottom"
                    />
                  </XAxis>
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
