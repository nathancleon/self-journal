import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Landing from '../Landing/Landing';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    const ifLanding = window.location.pathname === "/";
    return (
      <BrowserRouter>
        <div className="App">
        {
          // ifLanding ? <h1>LandingHeader</h1>:
          <Header />
        }
        <Main />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
