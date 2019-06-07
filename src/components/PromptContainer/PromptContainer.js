import React, { Component } from "react";
import Prompt from "./Prompts/Prompt";
import PromptSubmit from "./PromptSubmit/PromptSubmit";
import { saveJournalData } from "../../actions/JournalActions";
import { connect } from "react-redux";
import { Container, Main, Prompts } from "./PromptContainerStyles";

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
      answer: {},
      answerText: {},
      steps: 0,
      self: {
        question: "How would you describe your overall mental health today?",
        answers: ["Poor", "Not Great", "Good", "Great", "Excellent"],
        placeholder: "Briefly explain",
        image:
          "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/forgot_password_gi2d.svg",
        alt: "someone being pensive"
      },
      anxiety: {
        question: "How anxious would you say you feel?",
        answers: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
        placeholder: "Briefly explain",
        image:
          "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/meeting_115p.svg",
        alt: "a woman sitting down with a bear"
      },
      depression: {
        question: "How depressed would you say you feel?",
        answers: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
        placeholder: "Briefly explain",
        image:
          "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/sleep_analysis_o5f9.svg",
        alt: "a woman sleeping on a bed"
      },
      concentration: {
        question: "How would you describe your ability to concentrate?",
        answers: ["Poor", "Not Great", "Good", "Great", "Excellent"],
        placeholder: "Briefly explain",
        image:
          "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/in_progress_ql66.svg",
        alt: "a woman moving some gears in the air"
      },
      family: {
        question:
          "How do would you rate the connections you have with your family?",
        answers: ["Poor", "Not Great", "Good", "Great", "Excellent"],
        placeholder: "Briefly explain",
        image:
          "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/hang_out_h9ud.svg",
        alt: "a group of people sitting down at a table next to a tree"
      },
      friendships: {
        question:
          "How do would you rate the connections you have with your friends?",
        answers: ["Poor", "Not Great", "Good", "Great", "Excellent"],
        placeholder: "Briefly explain",
        image:
          "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/group_selfie_ijc6.svg",
        alt: "a group of people coming together to take a selfie"
      },
      gratitude: {
        question: "List at least three things you are grateful for",
        answers: [],
        placeholder: "Today, I am grateful for...",
        image:
          "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Bibliophile_hwqc.svg",
        alt: "a woman standing next to a giant open book"
      }
    };
  }

  goToNextPrompt(data) {
    let newData = {
      answer: {
        ["answer" + this.state.keys[this.state.steps]]: data.answer
      },
      answerText: {
        ["answerText" + this.state.keys[this.state.steps]]: data.answerText
      }
    };
    let newAnswer = Object.assign(this.state.answer, newData.answer);
    let newAnswerText = Object.assign(
      this.state.answerText,
      newData.answerText
    );
    let newStep = this.state.steps + 1;

    let newDataObject = {
      answer: this.state.answer,
      answerText: this.state.answerText,
      userID: this.props.userID,
      token: this.props.token
    };

    this.setState({
      answer: newAnswer,
      answerText: newAnswerText,
      dataObject: newDataObject,
      steps: newStep
    });
  }

  submitAllData(data) {
    return this.props.saveJournalData(data);
  }

  render() {
    return (
      <Container>
        <Main>
          <Prompts>
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
              <PromptSubmit
                submitPromptData={this.submitAllData.bind(this)}
                data={this.state.dataObject}
              />
            )}
          </Prompts>
        </Main>
      </Container>
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
