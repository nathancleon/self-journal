import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import JournalList from '../JournalList/JournalList';
import Form from '../Form/Form';
import User from '../User/User';
import PromptContainer from '../PromptContainer/PromptContainer';


export default class Main extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={JournalList} />
        <Route path="/create-new" component={Form} />
        <Route path="/user" component={User} />
        <Route path="/prompts" component={PromptContainer} />
      </Switch>
    );
  }
}