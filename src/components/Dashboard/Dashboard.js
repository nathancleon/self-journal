import React, { Component } from "react";
import styled from "@emotion/styled";
import { colors } from "../../globalStyles";
import Nav from "../Nav/Nav";
import UserBanner from "../UserBanner/UserBanner";
import JournalListContainer from "../JournalListContainer/JournalListContainer";
import PromptContainer from "../PromptContainer/PromptContainer";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: null
    };
  }

  renderPage(selectedComponent) {
    this.setState({
      currentPage: selectedComponent
    });
  }

  render() {
    return (
      <DashboardContainer>
        <Nav selectComponent={this.renderPage.bind(this)} />
        <DashboardContent>
          <UserBanner />
          {this.state.currentPage === "journal" ? (
            <JournalListContainer />
          ) : this.state.currentPage === "prompts" ? (
            <PromptContainer />
          ) : null}
        </DashboardContent>
      </DashboardContainer>
    );
  }
}

export default Dashboard;

const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundLight};
`;

const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
