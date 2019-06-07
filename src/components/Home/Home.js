import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { colors } from "../../globalStyles";
import moment from "moment";
import { fetchAllJournalData } from "../../actions/JournalActions";
import Loading from "../Loading/Loading";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentJournal: null,
      answerValues: {},
      answerTextValues: {},
      createdDate: "",
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    this.props.fetchAllJournalData().then(() => {
      //reversed the order of journal items so most recent journal entry displays in selectedJournal
      let journal = this.props.journal[0];
      this.setState({
        recentJournal: journal,
        createdDate: journal.created,
        answerValues: journal.answerValues,
        answerTextValues: journal.answerTextValues,
        isLoading: false
      });
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }

    return (
      <HomeContainer>
        <RecentJournal>
          <RecentJournalHeader>
            <RecentJournalTitle>
              {/* {moment(this.props.journal.created).format("LL")} */}
              {/* {moment(this.state.createdDate).format("LL")} */}
              {this.state.answerValues.answerSelf}
            </RecentJournalTitle>
          </RecentJournalHeader>
        </RecentJournal>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fafafaf;
`;

const RecentJournal = styled.div`
  width: 550px;
  height: 550px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow-y: scroll;
`;

const RecentJournalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const RecentJournalTitle = styled.h2`
  font-size: 2rem;
  color: ${colors.backgroundDark};
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
