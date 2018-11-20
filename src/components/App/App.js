import React, { Component } from "react";
import "./App.css";
import Main from "../Main/Main";
import LandingHeader from '../Headers/LandingHeader';
import UserAuthHeader from '../Headers/UserAuthHeader';
import DashboardHeader from '../Headers/DashboardHeader';

class App extends Component {
  render() {
    const ifLanding = window.location.pathname === "/";
    const ifLoginOrRegister = window.location.pathname === "/login" || window.location.pathname === "/register";
    const ifDashboard = window.location.pathname === "/list" || window.location.pathname === "/prompts";
    return (
      <div className="App">
        {
          ifLanding ? <LandingHeader  />: 
          ifLoginOrRegister ? <UserAuthHeader />:
          ifDashboard ? <DashboardHeader />: <LandingHeader />
        }
        <Main />
      </div>
    );
  }
}

export default App;
