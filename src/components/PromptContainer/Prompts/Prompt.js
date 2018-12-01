import React, { Component } from "react";
import {
  prompt,
  prompt__icon,
  prompt__form_container,
  form__question,
  form__options,
  form__option,
  form__option_input,
  form__text_field,
  form__next_btn,
  answer__error
} from "./PromptStyles";


export default class Prompt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      answerText: "",
      answerError: false,
      answerTextError: false
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.name + "Error"]: false
    });
  }

  handleNextEvent() {

    if (this.props.data.answers.length === 0 && this.state.answerText === "") {
      this.setState({
        answerTextError: true
      })
    } else if (this.props.data.answers.length === 0 && this.state.answer === "") {
      this.props.goNext({
        answer: this.state.answer,
        answerText: this.state.answerText
      });
    } else if (this.state.answer === "" && this.props.data.answers.length > 0) {
      this.setState({
        answerError: true
      })
    } else if (this.state.answerText === "" && this.props.data.answers.length > 0) {
      this.setState({
        answerTextError: true
      })
    } else if (this.state.answerError === false && this.state.answerTextError === false) {
      this.props.goNext({
        answer: this.state.answer,
        answerText: this.state.answerText
      });
    }
  }

  render() {
    const { question, answers, placeholder, image, alt} = this.props.data;

    return (
      <div className={prompt}>
        <img className={prompt__icon} src={image} alt={alt}/>
        <div className={prompt__form_container}>
          <h2 className={form__question}>{question}</h2>
          <ul className={form__options} role="radiogroup">
            {answers.map((element, index) => {
              return (
                <li className={form__option} key={index} role="radio" aria-checked="false" tabIndex="0">
                  <input
                    className={form__option_input}
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
            className={form__text_field}
            onChange={this.handleChange.bind(this)}
            rows="4"
            cols="50"
            name="answerText"
            placeholder={placeholder}
          />
          {
            this.state.answerError ? <p className={answer__error}>You must select an answer</p>:
            this.state.answerTextError ? <p className={answer__error}>You must enter some text</p>: null
          }
          <button
            className={form__next_btn}
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
