import React, { Component } from "react";
import {
  Container,
  Icon,
  FormContainer,
  FormQuestion,
  FormOptions,
  FormOption,
  OptionInput,
  FormTextField,
  NextButton,
  AnswerError
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
      });
    } else if (
      this.props.data.answers.length === 0 &&
      this.state.answer === ""
    ) {
      this.props.goNext({
        answer: this.state.answer,
        answerText: this.state.answerText
      });
    } else if (this.state.answer === "" && this.props.data.answers.length > 0) {
      this.setState({
        answerError: true
      });
    } else if (
      this.state.answerText === "" &&
      this.props.data.answers.length > 0
    ) {
      this.setState({
        answerTextError: true
      });
    } else if (
      this.state.answerError === false &&
      this.state.answerTextError === false
    ) {
      this.props.goNext({
        answer: this.state.answer,
        answerText: this.state.answerText
      });
    }
  }

  render() {
    const { question, answers, placeholder, image, alt } = this.props.data;

    return (
      <Container>
        <Icon src={image} alt={alt} />
        <FormContainer>
          <FormQuestion>{question}</FormQuestion>
          <FormOptions role="radiogroup">
            {answers.map((answer, index) => {
              return (
                <FormOption
                  key={index}
                  role="radio"
                  aria-checked="false"
                  tabIndex="0"
                >
                  <OptionInput
                    onChange={this.handleChange.bind(this)}
                    type="radio"
                    name="answer"
                    id={answer}
                    value={answer}
                  />
                  <label htmlFor={answer}>{answer}</label>
                </FormOption>
              );
            })}
          </FormOptions>
          <FormTextField
            onChange={this.handleChange.bind(this)}
            rows="4"
            cols="50"
            name="answerText"
            placeholder={placeholder}
          />
          {this.state.answerError ? (
            <AnswerError>You must select an answer</AnswerError>
          ) : this.state.answerTextError ? (
            <AnswerError>You must enter some text</AnswerError>
          ) : null}
          <NextButton onClick={this.handleNextEvent.bind(this)} type="button">
            Next
          </NextButton>
        </FormContainer>
      </Container>
    );
  }
}
