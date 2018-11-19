import React, { Component } from 'react';
import Prompt from './Prompts/Prompt';
import './PromptContainer.css';
import {saveJournalData} from '../../actions/JournalActions';
import {connect} from 'react-redux';

class PromptContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keys: [
        'Self',
        'Anxiety',
        'Depression',
        'Concentration',
        'Family',
        'Friendships'
      ],
      dataObject: {

      },
      steps: 0,
      self: {
        question: 'How do you describe your overall mental health today?',
        answers: ['Poor', 'Not Great', 'Good', 'Great', 'Excellent'],
        placeholder: 'Briefly explain'
      },
      anxiety: {
        question: 'How anxious would you say you feel today?',
        answers: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely'],
        placeholder: 'Briefly explain'
      },
      depression: {
        question: 'How depressed would you say you feel today?',
        answers: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely'],
        placeholder: 'Briefly explain'
      },
      concentration: {
        question: 'How would you describe your ability to concentrate today?',
        answers: ['Poor', 'Not Great', 'Good', 'Great', 'Excellent'],
        placeholder: 'Briefly explain'
      },
      family: {
        question: 'How do would you rate the connections you have with your family today?',
        answers: ['Poor', 'Not Great', 'Good', 'Great', 'Excellent'],
        placeholder: 'Briefly explain'
      },
      friendships: {
        question: 'How do would you rate the connections you have with your friends today?',
        answers: ['Poor', 'Not Great', 'Good', 'Great', 'Excellent'],
        placeholder: 'Briefly explain'
      },
    }
  }

  goToNextPrompt(data) {
    let newData = {
      ['answer' + this.state.keys[this.state.steps]]: data.answer,
      ['answerText' + this.state.keys[this.state.steps]]: data.answerText,
      userID: this.props.userID,
      token: this.props.token
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
    this.props.saveJournalData(this.state.dataObject);
  }

  render() {
    return (
      <div className="prompt-container">
        {this.state.steps === 0 && <Prompt goNext={this.goToNextPrompt.bind(this)} data={this.state.self} />}
        {this.state.steps === 1 && <Prompt goNext={this.goToNextPrompt.bind(this)} data={this.state.anxiety} />}
        {this.state.steps === 2 && <Prompt goNext={this.goToNextPrompt.bind(this)} data={this.state.depression} />}
        {this.state.steps === 3 && <Prompt goNext={this.goToNextPrompt.bind(this)} data={this.state.concentration} />}
        {this.state.steps === 4 && <Prompt goNext={this.goToNextPrompt.bind(this)} data={this.state.family} />}
        {this.state.steps === 5 && <Prompt goNext={this.goToNextPrompt.bind(this)} data={this.state.friendships} />}
        {this.state.steps === 6 && <button onClick={this.submitAllData.bind(this)}>Submit</button>}
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  console.log(reduxState.user.user.token);
  return ({
    userID: reduxState.user.user.id,
    token: reduxState.user.user.token
  })
} 

export default connect(mapStateToProps, {saveJournalData})(PromptContainer);