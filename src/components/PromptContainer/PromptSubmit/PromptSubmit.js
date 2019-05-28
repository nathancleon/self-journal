import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { css } from "emotion";
import { colors } from "../../../globalStyles";

const prompt__submit_container = css`
   {
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 650px;
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(27, 39, 51, 0.25) 0px 10px 20px -8px;
    padding: 50px;
  }

  @media only screen and (max-width: 600px) {
     {
      width: 100%;
    }

    img {
      left: 30%;
    }

    h2 {
      font-size: 20px;
      line-height: 25px;
    }
  }

  @media only screen and (max-width: 400px) {
    img {
      left: 25%;
    }
  }

  @media only screen and (max-height: 600px) {
    img {
      left: 36%;
      width: 100px;
      top: 0px;
    }
  }
`;

const prompt__submit_img = css`
   {
    position: absolute;
    top: -100px;
    left: 35%;
    width: 200px;
  }
`;

const prompt__submit_text = css`
   {
    font-size: 24px;
    text-align: center;
    width: 100%;
    line-height: 50px;
    margin-top: 40px;
  }
`;

const prompt__submit_btn = css`
   {
    height: 45px;
    width: 50%;
    font-size: 16px;
    align-self: center;
    background-color: ${colors.main};
    color: #fff;
    font-weight: bold;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 35px;
    cursor: pointer;
    letter-spacing: 1px;
  }
  &:hover {
    background-color: #fefefe;
    color: #333;
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
      <div className={prompt__submit_container}>
        <img
          className={prompt__submit_img}
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Jogging_t14q.svg"
          alt="a man running with little hearts around him"
        />
        <h2 className={prompt__submit_text}>
          Thank you for checking in with yourself today!
        </h2>
        <button
          className={prompt__submit_btn}
          onClick={this.handleSubmitEvent.bind(this)}
          type="button"
        >
          Submit
        </button>
      </div>
    );
  }
}
