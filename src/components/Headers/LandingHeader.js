import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class LandingHeader extends Component {
  render() {
    return (
      <header>
        <h1 className="header-title">Self-Journal</h1>
        <ul className="header-links">
          <li className="header-link">
            <Link to="/login">Login</Link>
          </li>
          <li className="header-link">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </header>
    );
  };
}
