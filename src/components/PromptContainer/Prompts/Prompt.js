import React, { Component } from "react";
import "./Prompt.css";

export default class Prompt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      answerText: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmitEvent() {
    this.props.goNext({
      answer: this.state.answer,
      answerText: this.state.answerText
    });
  }

  render() {
    const { title, question, answers, placeholder } = this.props.data;

    return (
      <div className="prompt">
        <h1 className="prompt-title">{title}</h1>
        <div className="prompt-answers-container">
          <h2 className="prompt-question">{question}</h2>
          <div className="prompt-answers">
            {answers.map((element, index) => {
              return (
                <div className="prompt-answer" key={index}>
                  <input
                    onChange={this.handleChange.bind(this)}
                    type="radio"
                    name="answer"
                    value={index + 1}
                  />{" "}
                  <span>{element}</span>
                </div>
              );
            })}
          </div>
          <textarea
            className="prompt-text-field"
            onChange={this.handleChange.bind(this)}
            rows="4"
            cols="50"
            name="answerText"
            placeholder={placeholder}
          />
          <button
            className="prompt-submit-btn"
            onClick={this.handleSubmitEvent.bind(this)}
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
