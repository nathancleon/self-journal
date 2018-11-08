import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import JournalList from '../JournalList/JournalList';
import User from '../User/User';
import PromptContainer from '../PromptContainer/PromptContainer';
import Landing from '../Landing/Landing';


export default class Main extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/list" component={JournalList} />
        <Route path="/user" component={User} />
        <Route path="/prompts" component={PromptContainer} />
      </Switch>
    );
  }
}