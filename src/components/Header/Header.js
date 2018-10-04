import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return(
      <header>
      <h1>Header</h1>
      <ul>
        <li><Link to="/">List</Link></li>
        <li><Link to="/create-new">Form</Link></li>
        <li><Link to="/user">User</Link></li>
      </ul>
      </header>
    );
  }
}