import React, { Component } from "react";
import styled from "react-emotion";
import moment from "moment";

const SelectedPromptContainer = styled("div")`
   {
    display: flex;
    align-items: stretch;
    background-color: #fefefe;
    width: 100%;
    margin: 60px;
    overflow-y: scroll;
  }
`;

const SelectedPromptData = styled("div")`
   {
    display: flex;
    flex-direction: column;
    max-height: 92vh;
  }
  p {
    text-align: left;
    margin-top: 10px;
  }
  h1 {
    font-size: 24px;
  }
  h4 {
    margin-top: 25px;
  }
`;

const promptData = {
  questions: {
    self: {
      question: "How do you describe your overall mental health today?"
    },
    anxiety: {
      question: "How anxious would you say you feel today?"
    },
    depression: {
      question: "How depressed would you say you feel today?"
    },
    concentration: {
      question: "How would you describe your ability to concentrate today?"
    },
    family: {
      question:
        "How do would you rate the connections you have with your family today?"
    },
    friendships: {
      question:
        "How do would you rate the connections you have with your friends today?"
    },
    gratitude: {
      question: "List at least three things you are grateful for today"
    }
  },
  response: {
    self: {
      answers: ["Poor", "Not Great", "Good", "Great", "Excellent"]
    },
    anxiety: {
      answers: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"]
    },
    depression: {
      answers: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"]
    },
    concentration: {
      answers: ["Poor", "Not Great", "Good", "Great", "Excellent"]
    },
    family: {
      answers: ["Poor", "Not Great", "Good", "Great", "Excellent"]
    },
    friendships: {
      answers: ["Poor", "Not Great", "Good", "Great", "Excellent"]
    }
  }
};

function convertAnswerNumber(number, answer) {
  return answer[number - 1];
}

class PromptResponses extends Component {
  render() {
    console.log(this.props.journal);
    return (
      <SelectedPromptContainer>
        <SelectedPromptData>
          <h1>
            Journal from {moment(this.props.journal.created).format("LL")}
          </h1>
          <div>
            <h4>{promptData.questions.self.question}</h4>
            <p>
              Answer:{" "}
              {convertAnswerNumber(
                this.props.journal.answerSelf,
                promptData.response.self.answers
              )}
            </p>
            <p>Answer Text: {this.props.journal.answerTextSelf}</p>
          </div>
          <div>
            <h4>{promptData.questions.anxiety.question}</h4>
            <p>
              Answer:{" "}
              {convertAnswerNumber(
                this.props.journal.answerAnxiety,
                promptData.response.anxiety.answers
              )}
            </p>
            <p>Answer Text: {this.props.journal.answerTextAnxiety}</p>
          </div>
          <div>
            <h4>{promptData.questions.depression.question}</h4>
            <p>
              Answer:{" "}
              {convertAnswerNumber(
                this.props.journal.answerDepression,
                promptData.response.depression.answers
              )}
            </p>
            <p>Answer Text: {this.props.journal.answerTextDepression}</p>
          </div>
          <div>
            <h4>{promptData.questions.concentration.question}</h4>
            <p>
              Answer:{" "}
              {convertAnswerNumber(
                this.props.journal.answerConcentration,
                promptData.response.concentration.answers
              )}
            </p>
            <p>Answer Text: {this.props.journal.answerTextConcentration}</p>
          </div>
          <div>
            <h4>{promptData.questions.family.question}</h4>
            <p>
              Answer:{" "}
              {convertAnswerNumber(
                this.props.journal.answerFamily,
                promptData.response.family.answers
              )}
            </p>
            <p>Answer Text: {this.props.journal.answerTextFamily}</p>
          </div>
          <div>
            <h4>{promptData.questions.friendships.question}</h4>
            <p>
              Answer:{" "}
              {convertAnswerNumber(
                this.props.journal.answerFriendships,
                promptData.response.friendships.answers
              )}
            </p>
            <p>Answer Text: {this.props.journal.answerTextFriendships}</p>
          </div>
          <div>
            <h4>{promptData.questions.gratitude.question}</h4>
            <p>Answer Text: {this.props.journal.answerTextGratitude}</p>
          </div>
        </SelectedPromptData>
      </SelectedPromptContainer>
    );
  }
}

export default PromptResponses;
