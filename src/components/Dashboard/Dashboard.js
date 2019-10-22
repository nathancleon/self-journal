import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import UserBanner from "../DashboardBanner/DashboardBanner";
import Home from "../Home/Home";
import JournalListContainer from "../JournalListContainer/JournalListContainer";
import PromptContainer from "../PromptContainer/PromptContainer";
import Analytics from "../Analytics/Analytics";
import { DashboardContainer, DashboardContent } from "./DashboardStyles";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "home"
    };
  }

  updatePath(currentComponent) {
    this.setState({
      currentPage: currentComponent
    });
  }

  render() {
    return (
      <DashboardContainer>
        <Nav currentPath={this.state.currentPage} />
        <DashboardContent>
          <Switch>
            <Route
              exact
              path="/dashboard"
              render={routeProps => (
                <>
                  <UserBanner />
                  <Home
                    {...routeProps}
                    currentComponent={this.updatePath.bind(this)}
                  />
                </>
              )}
            />
            <Route
              exact
              path="/dashboard/journals"
              render={routeProps => (
                <JournalListContainer
                  {...routeProps}
                  currentComponent={this.updatePath.bind(this)}
                />
              )}
            />
            <Route
              path="/dashboard/analytics"
              render={routeProps => (
                <Analytics
                  {...routeProps}
                  currentComponent={this.updatePath.bind(this)}
                />
              )}
            />
            <Route
              path="/dashboard/prompts"
              render={routeProps => (
                <PromptContainer
                  {...routeProps}
                  currentComponent={this.updatePath.bind(this)}
                />
              )}
            />
          </Switch>
        </DashboardContent>
      </DashboardContainer>
    );
  }
}

export default Dashboard;
