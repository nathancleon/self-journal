import React, { Component } from "react";
import { css } from "react-emotion";

const prompt = css`
  {
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 650px;
    margin-top: 50px;
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(27, 39, 51, 0.25) 0px 10px 20px -8px;
  }

  @media only screen and (max-width: 600px) {
    {
      width: 100%;
    }

    img {
      top: -30px;
      width: 100px;
    }
  }

  @media only screen and (max-width: 360px) {
    img {
      left: 35%;
    }
  }

  @media only screen and (max-height: 600px) {
  {
    height: 80vh;
    margin-top: 0px;
  }
  img {
    width: 80px;
    top: 10px;
  }
}
`;

const prompt__icon = css`
  {
    position: absolute;
    top: -60px;
    left: 40%;
    width: 150px;
  }
`;

const prompt__form_container = css`
  {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 80%;
  }

  @media only screen and (max-width: 600px) {
    {
      width: 100%;
    }

    h2 {
      font-size: 18px;
    }

    ul li label {
      padding: 5px 10px;
    }
  }

  @media only screen and (max-width: 410px) {
    ul li label {
      font-size: 12px;
      padding: 5px;
    }
  }

  @media only screen and (max-height: 600px) {
  h2 {
    margin-bottom: 15px;
  }
  textarea {
    height: 100px;
  }
}
`;

const form__question = css`
  {
    font-size: 24px;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;

const form__options = css`
  {
    display: inline-block;
    margin: 0 auto;
    border-radius: 5px;
  }
`;

const form__option = css`
  {
    position: relative;
    display: inline-block;
    border: 1px solid #ddd;
    border-right: 0px;
  }
  &:first-child{
    border-left: 1px solid #ddd;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-right: 1px solid #ddd;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  label {
    display: inline-block;
    cursor: pointer;
    padding: 10px 20px;
  }
  &:first-child label {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child label {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const form__option_input = css`
  {
    position: absolute;
    visibility: hidden;
    display: none;
  }
  &:checked + label {
    background-color: rgba(58, 94, 255, 0.15);
  }
`;

const form__text_field = css`
  {
    max-height: 200px;
    height: 200px;
    margin-top: 40px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 2px;
    font-size: 16px;
  }
`;

const form__next_btn = css`
  {
    height: 45px;
    width: 50%;
    font-size: 16px;
    align-self: center;
    background-color: rgba(58, 94, 255, 0.7);
    color: #fff;
    font-weight: bold;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 30px;
    cursor: pointer;
    letter-spacing: 1px;
  }
  &:hover {
    background-color: #fff;
    color: #000;
    font-weight: normal;
  }
`;

const answer__error = css`
  {
    color: rgb(220, 80, 80);
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: -20px;
    align-self: center;
  }
`;



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
