import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import UserBanner from "../UserBanner/UserBanner";
import Home from "../Home/Home";
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

  render() {
    return (
      <DashboardContainer>
        <Nav />
        <DashboardContent>
          <UserBanner />
          <Switch>
            <Route exact path="/dashboard" component={Home} />
            <Route
              exact
              path="/dashboard/journals"
              component={JournalListContainer}
            />
            <Route path="/dashboard/prompts" component={PromptContainer} />
          </Switch>
        </DashboardContent>
      </DashboardContainer>
    );
  }
}

export default Dashboard;
