import React, { Component } from 'react';


export default class Prompt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      answerText: ''
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,

    });
  }

  handleSubmitEvent() {
    console.log(this.state);
  }

  render() {
    const {title, question, answers, placeholder} = this.props.data;
  
    return(
      <div>
        <h1>{title}</h1>
        <div>
          <h2>{question}</h2>
          {
            answers.map((element, index) => {
              return (
                <div key={index}>
                  <input onChange={this.handleChange.bind(this)} type="radio" name="answer" value={index + 1} /> <span>{element}</span>
                </div>
              )
            })
          }
          <div>
          <input onChange={this.handleChange.bind(this)} type="text" name="answerText" placeholder={placeholder} />
          </div>
          <button onClick={this.handleSubmitEvent.bind(this)} type="submit">Submit</button>
        </div>
      </div>
    );
  }
}