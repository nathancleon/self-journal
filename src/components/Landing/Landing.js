import React, { Component } from "react";
import "./Landing.css";
import Header from "../Headers/Header";

export default class Landing extends Component {
  render() {

    const linksArray = ["login", "register"];

    return (
      <div>
       <Header links={linksArray} />
        <div className="Landing">
        <section className="banner">
          <div className="triangle"></div>
        </section>
        </div>
      </div>
      
    );
  }
}
