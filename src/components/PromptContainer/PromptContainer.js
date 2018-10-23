import React, { Component } from 'react';
import Prompt from '../Prompts/Prompt';
import './PromptContainer.css';

export default class PromptContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keys: [
        'self',
        'family',
        'secondSelf'
      ],
      dataObject: {

      },
      steps: 0,
      self: {
        title: 'Self',
        question: 'How do you feel about yourself today?',
        answers: ['Bad', 'Not Great', 'Good', 'Great', 'Excellent'],
        placeholder: 'Briefly explain how you feel about yourself today'
      },
      family: {
        title: 'Family',
        question: 'How do you feel about your family today?',
        answers: ['Bad', 'Not Great', 'Good', 'Great', 'Excellent'],
        placeholder: 'Briefly explain how you feel about yourself today'
      }
    }
  }

  goToNextPrompt(data) {
    let newData = {
      ['answer-' + this.state.keys[this.state.steps]]: data.answer,
      ['answerText-' + this.state.keys[this.state.steps]]: data.answerText
    }
    let newDataObject = Object.assign(this.state.dataObject, newData);
    let newStep = this.state.steps + 1;
    this.setState({
      dataObject: newDataObject,
      steps: newStep
    });
    
  }

  submitAllData() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="prompt-container">
        {this.state.steps === 0 && <Prompt goNext={this.goToNextPrompt.bind(this)} data={this.state.self} />}
        {this.state.steps === 1 && <Prompt goNext={this.goToNextPrompt.bind(this)} data={this.state.family} />}
        {this.state.steps === 2 && <Prompt goNext={this.goToNextPrompt.bind(this)} data={this.state.self} />}
        {this.state.steps === 3 && <button onClick={this.submitAllData.bind(this)}>Submit</button>}
      </div>
    )
  }
}