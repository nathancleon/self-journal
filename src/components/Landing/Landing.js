import React, { Component } from 'react';
import Header from '../Header/Header';
// import './Landing.css';

export default class Landing extends Component {
  render() {
    return(
      <div className="landing">
        <Header />
        <section className="banner"></section>
      </div>
    );
  }
}