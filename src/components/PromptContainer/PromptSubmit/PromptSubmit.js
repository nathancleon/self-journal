import React, { Component } from "react";
import "./PromptSubmit.css";
import { Redirect } from 'react-router-dom';

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
      return <Redirect to='/list' />;
    }

    return (
      <div className="prompt_submit-container">
        <img className="prompt_submit-image" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Jogging_t14q.svg" />
        <h2 className="prompt_submit-text">Thank you for checking in with yourself today!</h2>
        <button
          className="prompt_submit-btn"
          onClick={this.handleSubmitEvent.bind(this)}
          type="button"
        >
          Submit
        </button>
      </div>
    );
  }
}
