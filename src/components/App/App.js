import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Landing from "../Landing/Landing";

class App extends Component {
  render() {
    const ifLanding = window.location.pathname === "/";
    return (
      <div className="App">
        {
          // ifLanding ? <h1>LandingHeader</h1>:
          <Header />
        }
        <Main />
      </div>
    );
  }
}

export default App;
