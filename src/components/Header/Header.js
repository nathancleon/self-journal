import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return(
      <header>
      <h1 className="header-title">Self-Journal</h1>
      <ul className="header-links">
        <li className="header-link"><Link to="/list">List</Link></li>
        <li className="header-link"><Link to="/create-new">Form</Link></li>
        <li className="header-link"><Link to="/user">User</Link></li>
        <li className="header-link"><Link to="/prompts">Prompts</Link></li>
      </ul>
      </header>
    );
  }
}