import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../../globalStyles";

const PromptSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 650px;
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(21, 27, 38, 0.15);
  padding: 50px;
  margin-top: 70px;
`;

const PromptSubmitImage = styled.img`
  position: absolute;
  top: -50px;
  left: 35%;
  width: 200px;
`;

const PromptSubmitText = styled.h2`
  font-size: 24px;
  text-align: center;
  width: 100%;
  line-height: 50px;
  margin-top: 40px;
`;

const PromptSubmitButton = styled.button`
  height: 45px;
  width: 50%;
  font-size: 16px;
  align-self: center;
  background-color: ${colors.main};
  color: #fff;
  font-weight: bold;
  border: 1px solid #ddd;
  border-radius: 25px;
  margin-top: 20px;
  margin-bottom: 0px;
  cursor: pointer;
  letter-spacing: 1px;
  &:hover {
    background-color: #fff;
    color: #000;
    font-weight: normal;
  }
`;

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
      return <Redirect to="/list" />;
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
