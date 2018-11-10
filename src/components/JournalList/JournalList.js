import React, { Component } from 'react';

export default class JournalList extends Component {
  render() {
    console.log(localStorage.getItem('token'));
    return(
      <h1>JournalList</h1>
    );
  }
}