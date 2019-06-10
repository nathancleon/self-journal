import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  PromptSubmitContainer,
  PromptSubmitImage,
  PromptSubmitText,
  PromptSubmitButton
} from "./PromptSubmitStyles";

export default class PromptSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toList: false
    };
  }

  handleSubmitEvent(event) {
    event.preventDefault();
    this.props.submitPromptData(this.props.data).then(() => {
      this.setState({
        toList: true
      });
    });
  }

  render() {
    if (this.state.toList === true) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <PromptSubmitContainer>
        <PromptSubmitImage
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Jogging_t14q.svg"
          alt="a man running with little hearts around him"
        />
        <PromptSubmitText>
          Thank you for checking in with yourself today!
        </PromptSubmitText>
        <PromptSubmitButton
          onClick={this.handleSubmitEvent.bind(this)}
          type="button"
        >
          Submit
        </PromptSubmitButton>
      </PromptSubmitContainer>
    );
  }
}
