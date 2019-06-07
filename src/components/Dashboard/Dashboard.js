import React, { Component } from "react";
import Nav from "../Nav/Nav";
import UserBanner from "../UserBanner/UserBanner";
import JournalListContainer from "../JournalListContainer/JournalListContainer";
import PromptContainer from "../PromptContainer/PromptContainer";
import { DashboardContainer, DashboardContent } from "./DashboardStyles";

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
