import React, { Component } from "react";
import styled from "react-emotion";
import moment from "moment";

//----------------------------------------------------------
// STYLES
//----------------------------------------------------------

const SelectedPromptContainer = styled("div")`
   {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;
    background-color: #fefefe;
    width: 100%;
    margin-left: 60px;
    margin-top: 20px;
  }
  
`;

const SelectedPromptHeader = styled("div")`
  {
    display: flex;
    margin-top: 40px;
    position: relative;
  }
  &:after {
    position: absolute;
    content: "";
    bottom: -10px;
    left: 0px;
    width: 60%;
    height: 2px;
    background-color: #ddd;
  }
  h1 {
    font-size: 24px;
    width: 50%;
    height: 50px;
    padding-top: 10px;
  }
  
`

const SelectedPromptData = styled("div")`
   {
    display: flex;
    flex-direction: column;
    max-height: 92vh;
    width: 100%;
    overflow-y: scroll;
  }
  p {
    text-align: left;
    margin-top: 15px;
  }
 
  h4 {
    margin-top: 25px;
  }
`;

const PromptIcons = styled("div")`
  {
    display: flex;
    justify-content: space-around;
    position: inline-block;
    width: 10%;
    height: 50px;
  }
  svg {
    width: 25px;
    cursor: pointer;
  }
  svg:first-child {
    fill: orange;
  }
  svg:nth-child(2) {
    fill: red;
    width: 23px;
  }
`;

//----------------------------------------------------------
// DATA
//----------------------------------------------------------

const promptData = {
  //TODO: refactor object to have keys in questions to contain individual questions and answers array
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


//----------------------------------------------------------
// COMPONENT
//----------------------------------------------------------

class PromptResponses extends Component {
  constructor(props) {
    super(props)

    this.renderAnswerOptions.bind(this);
    this.renderAnswerValue.bind(this);

    this.state = {
      makeEdit: false
    }
  }

  //----------------------------------------------------------
  // FUNCTIONS
  //----------------------------------------------------------

  convertAnswerNumber(number, answer) {
    return " " + answer[number - 1];
  }


  toggleEdit(e) {
    console.log(e.target);
    if (this.state.makeEdit) {
      this.setState({
        makeEdit: false
      });
    } else {
      this.setState({
        makeEdit: true
      });
    }
  }

  renderAnswerValue(questionIndex) {
    //this pulls just the user answer data (e.g. "answerSelf: Good")
    let journalAnswerArray = Object.entries(this.props.journal).slice(3, -9).map(newArray => newArray[1]);
    //only return answers if the question index is less than the answer array
    if(questionIndex < journalAnswerArray.length) {
      return (
        <div style={{display: "flex"}}>
          <p>Answer: </p>
          <p>{journalAnswerArray[questionIndex]}</p>
        </div>
        )
    } else {
      return null;
    }
    
  }

  renderAnswerOptions(questionKey, questionIndex) {

    //TODO: refactor  this function after promptData refactor to then use only keys to update, limit use of index
    //also refactor data model in database so that slice is not needed

    //this pulls just the user answer data (e.g. "answerSelf: Good")
    let journalAnswerArray = Object.entries(this.props.journal).slice(3, -9).map(newArray => newArray[1]);

    let userResponseOptions = promptData.response[questionKey];
    if(!userResponseOptions) {
      return null;
    }
    let renderOptions = userResponseOptions.answers.map(element => {
      return <option key={element} value={element}>{element}</option>;
    })
    return (
      <div style={{display: "flex"}}>
        <p>Answer: </p>
        <select defaultValue={journalAnswerArray[questionIndex]}>{renderOptions}</select>
      </div>
      );
  }

  renderAnswerText(questionKey, questionIndex) {
    let journalTextArray = Object.entries(this.props.journal).slice(9, -2).map(newArray => newArray[1]);
    let userTextValue = journalTextArray[questionIndex];
       return <textarea rows="4" cols="50" key={questionKey} defaultValue={userTextValue}></textarea>;
  }

  renderAnswerTextValue(questionIndex) {
    let journalTextArray = Object.entries(this.props.journal).slice(9, -2).map(newArray => newArray[1]);
    return <textarea rows="4" cols="50" key={journalTextArray[questionIndex]} defaultValue={journalTextArray[questionIndex]} readOnly></textarea>
  }

  componentWillUpdate(nextProps) {
      if (this.state.makeEdit && this.props.journal._id !== nextProps.journal.id) {
        this.setState({
          makeEdit: false
        });
      }
  }

  render() {
    return (
      <SelectedPromptContainer>
            <SelectedPromptHeader>
              <h1>
                Journal from {moment(this.props.journal.created).format("LL")}
              </h1>
              <PromptIcons>
                  <svg onClick={this.toggleEdit.bind(this)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"/></svg>
              </PromptIcons>
            </SelectedPromptHeader>
        
            
            <SelectedPromptData>
            {
              //Render all questions from promptData object to page
              Object.keys(promptData.questions).map((key, index) => {
                return (
                  <div key={index}>
                    <h4 key={index}>{promptData.questions[key].question}</h4>
                    <div style={{ display: "flex"}}>
                          {
                            //if edit state is active, return answer options, else return just the value from user data to the page
                            this.state.makeEdit ?
                            this.renderAnswerOptions(key, index): 
                            this.renderAnswerValue(index)
                          }
                    </div>
                    <div>
                      {
                        //if edit state is active, return textarea, else return just the text value from user data to the page
                        this.state.makeEdit ?
                        this.renderAnswerText(key, index): 
                        this.renderAnswerTextValue(index)
                        }
                    </div>
                    
                  </div>
                );
              })
            }
            </SelectedPromptData>
      </SelectedPromptContainer>
    );
  }
}

export default PromptResponses;
