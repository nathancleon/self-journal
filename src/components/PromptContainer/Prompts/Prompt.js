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

  handleEnterKeyPress(event) {
    console.log(event);
    // if (event.keyCode == 13) {
    //   event.setAttribute("aria-checked", "true");
    // }
  }

  handleNextEvent() {
    this.props.goNext({
      answer: this.state.answer,
      answerText: this.state.answerText
    });
  }

  render() {
    const { question, answers, placeholder, image, alt} = this.props.data;

    return (
      <div className="prompt">
        <img className="prompt-image" src={image} alt={alt}/>
        <div className="prompt-answers-container">
          <h2 className="prompt-question">{question}</h2>
          <ul className="prompt-answers" role="radiogroup">
            {answers.map((element, index) => {
              return (
                <li className="prompt-answer" key={index} role="radio" aria-checked="false" tabIndex="0" onKeyDown={this.handleEnterKeyPress.bind(this)}>
                  <input
                    className="prompt-input"
                    onChange={this.handleChange.bind(this)}
                    type="radio"
                    name="answer"
                    id={element}
                    value={element}
                  />
                  <label htmlFor={element}>{element}</label>
                </li>
              );
            })}
          </ul>
          <textarea
            className="prompt-text-field"
            onChange={this.handleChange.bind(this)}
            rows="4"
            cols="50"
            name="answerText"
            placeholder={placeholder}
          />
          <button
            className="prompt-next-btn"
            onClick={this.handleNextEvent.bind(this)}
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
