import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import JournalList from '../JournalList/JournalList';
import PromptContainer from '../PromptContainer/PromptContainer';
import Landing from '../Landing/Landing';
import Login from '../User/Login/Login';
import Register from '../User/Register/Register';

export default class Main extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/list" component={JournalList} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/prompts" component={PromptContainer} />
      </Switch>
    );
  }
}