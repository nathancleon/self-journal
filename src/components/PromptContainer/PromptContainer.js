import React, { Component } from "react";
import Prompt from "./Prompts/Prompt";
import PromptSubmit from "./PromptSubmit/PromptSubmit";
import { saveJournalData } from "../../actions/JournalActions";
import { connect } from "react-redux";
import Header from "../Headers/Header";
import { css } from "react-emotion";
import { colors } from "../../globalStyles";


const prompt_container = css`
  {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 92vh;
    width: 100%;
    background-color: ${colors.backgroundLight};
  }
`;

class PromptContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keys: [
        "Self",
        "Anxiety",
        "Depression",
        "Concentration",
        "Family",
        "Friendships",
        "Gratitude"
      ],
      dataObject: {},
      steps: 0,
      self: {
        question: "How would you describe your overall mental health today?",
        answers: ["Poor", "Not Great", "Good", "Great", "Excellent"],
        placeholder: "Briefly explain",
        image: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/forgot_password_gi2d.svg",
        alt: "someone being pensive"
      },
      anxiety: {
        question: "How anxious would you say you feel?",
        answers: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
        placeholder: "Briefly explain",
        image: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/meeting_115p.svg",
        alt: "a woman sitting down with a bear"
      },
      depression: {
        question: "How depressed would you say you feel?",
        answers: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
        placeholder: "Briefly explain",
        image: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/sleep_analysis_o5f9.svg",
        alt: "a woman sleeping on a bed"
      },
      concentration: {
        question: "How would you describe your ability to concentrate?",
        answers: ["Poor", "Not Great", "Good", "Great", "Excellent"],
        placeholder: "Briefly explain",
        image: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/in_progress_ql66.svg",
        alt: "a woman moving some gears in the air"
      },
      family: {
        question:
          "How do would you rate the connections you have with your family?",
        answers: ["Poor", "Not Great", "Good", "Great", "Excellent"],
        placeholder: "Briefly explain",
        image: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/hang_out_h9ud.svg",
        alt: "a group of people sitting down at a table next to a tree"
      },
      friendships: {
        question:
          "How do would you rate the connections you have with your friends?",
        answers: ["Poor", "Not Great", "Good", "Great", "Excellent"],
        placeholder: "Briefly explain",
        image: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/group_selfie_ijc6.svg",
        alt: "a group of people coming together to take a selfie"
      },
      gratitude: {
        question: "List at least three things you are grateful for",
        answers: [],
        placeholder: "Today, I am grateful for...",
        image: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Bibliophile_hwqc.svg",
        alt: "a woman standing next to a giant open book"
      }
    };
  }

  goToNextPrompt(data) {
    let newData = {
      ["answer" + this.state.keys[this.state.steps]]: data.answer,
      ["answerText" + this.state.keys[this.state.steps]]: data.answerText,
      userID: this.props.userID,
      token: this.props.token
    };
    let newDataObject = Object.assign(this.state.dataObject, newData);
    let newStep = this.state.steps + 1;

    this.setState({
      dataObject: newDataObject,
      steps: newStep
    });
  }

  submitAllData(data) {
    return this.props.saveJournalData(data);
  }

  render() {

    const linksArray = ["list", "log out"];

    return (
      <div>
        <Header links={linksArray} />
      <div className={prompt_container}>
        {this.state.steps === 0 && (
          <Prompt
            goNext={this.goToNextPrompt.bind(this)}
            data={this.state.self}
          />
        )}
        {this.state.steps === 1 && (
          <Prompt
            goNext={this.goToNextPrompt.bind(this)}
            data={this.state.anxiety}
          />
        )}
        {this.state.steps === 2 && (
          <Prompt
            goNext={this.goToNextPrompt.bind(this)}
            data={this.state.depression}
          />
        )}
        {this.state.steps === 3 && (
          <Prompt
            goNext={this.goToNextPrompt.bind(this)}
            data={this.state.concentration}
          />
        )}
        {this.state.steps === 4 && (
          <Prompt
            goNext={this.goToNextPrompt.bind(this)}
            data={this.state.family}
          />
        )}
        {this.state.steps === 5 && (
          <Prompt
            goNext={this.goToNextPrompt.bind(this)}
            data={this.state.friendships}
          />
        )}
        {this.state.steps === 6 && (
          <Prompt
            goNext={this.goToNextPrompt.bind(this)}
            data={this.state.gratitude}
          />
        )}
        {this.state.steps === 7 && (
          <PromptSubmit submitPromptData={this.submitAllData.bind(this)} data={this.state.dataObject} />
        )}
      </div>
      </div>
      
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userID: reduxState.user.user.id,
    token: reduxState.user.user.token
  };
};

export default connect(
  mapStateToProps,
  { saveJournalData }
)(PromptContainer);
