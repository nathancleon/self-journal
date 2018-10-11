import React, { Component } from 'react';
import Prompt from '../Prompts/Prompt';

export default class PromptContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      self: {
        title: 'Self',
        question: 'How do you feel about yourself today?',
        answers: ['Bad', 'Not Great', 'Good', 'Great', 'Excellent'],
        placeholder: 'Briefly explain how you feel about yourself today'
      },
      family: {
        
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Prompt</h1>
        <Prompt data={this.state.self} />
      </div>
    )
  }
}