import React, { Component } from "react";
import styled from "react-emotion";
import moment from "moment";

//----------------------------------------------------------
// STYLES
//----------------------------------------------------------

const SelectedPromptContainer = styled("div")`
   {
    display: flex;
    align-items: stretch;
    background-color: #fefefe;
    width: 100%;
    margin-left: 60px;
    margin-top: 40px;
    overflow-y: scroll;
  }
`;

const SelectedPromptData = styled("div")`
   {
    display: flex;
    flex-direction: column;
    position: relative;
    max-height: 92vh;
    width: 100%;
  }
  p {
    text-align: left;
    margin-top: 15px;
  }
  h1 {
    font-size: 24px;
    width: 70%;
    margin-top: 40px;
    margin-bottom: 20px;
    position: relative;
  }
  h1:after {
    position: absolute;
    content: "";
    bottom: -10px;
    left: 0px;
    width: 100%;
    height: 2px;
    background-color: #ddd;
  }
  h4 {
    margin-top: 25px;
  }
`;

const PromptIcons = styled("div")`
  {
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 5px;
    right: 15px;
    width: 140px;
    height: 50px;
    margin-top: 28px;
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

    this.dataAnswerFilter.bind(this);

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

  dataAnswerFilter(data) {
    let JournalAnswerArray = Object.entries(data).slice(3, -9).map(entry => entry[1]);
    console.log(JournalAnswerArray);
    // for(let i = 0; i < 6; i++) {
      
    //   // console.log(data);
    //   // return (
    //   //   <select defaultValue={data[i] - 1}>
    //   //   {
    //   //     Object.keys(promptData.response).map((key, index) => {
    //   //       let responseData = promptData.response[key];
    //   //       responseData.answers.map((element, index) => {
    //   //        return <option key={index} value={index}>{element}</option>;
    //   //      })
    //   //     })
    //   //   }
            
    //   //   </select>
    //   // )
    //  }
    let responseFilter = Object.keys(promptData.response).map((key, index) => {
      let responseData = promptData.response[key];
     return responseData.answers.map((element, index) => {
       return <option key={index} value={index}>{element}</option>;
     })
    });

    JournalAnswerArray.map((element, index) => {
      console.log(element);
      return (
        <select defaultValue={element - 1}>
        { 
          responseFilter
        }
        </select>
      )
    })
  }

  componentWillUpdate(nextProps) {
      if (this.state.makeEdit && this.props.journal._id !== nextProps.journal.id) {
        this.setState({
          makeEdit: false
        });
      }
  }

  render() {
    console.log(this.props.journal);
    return (
      <SelectedPromptContainer>
        <SelectedPromptData>
            <h1>
              Journal from {moment(this.props.journal.created).format("LL")}
            </h1>
          <PromptIcons>
              <svg onClick={this.toggleEdit.bind(this)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"/></svg>
            </PromptIcons>

            {
              Object.keys(promptData.questions).map((key, index) => {
                return (
                  <div key={index}>
                    <h4 key={index}>{promptData.questions[key].question}</h4>
                    <p>
                      Answer:
                    </p>
                    {
                        !this.state.makeEdit ?
                        this.dataAnswerFilter(this.props.journal): 
                        null
                      }
                  </div>
                );
              })
            }
            
          {/* <div>
            <h4>{promptData.questions.self.question}</h4>
            <p>
              Answer:
              {
                this.state.makeEdit ?
                <select defaultValue={this.props.journal.answerSelf - 1}>
                  {promptData.response.self.answers.map((element, index) => {
                    return <option key={index} value={index}>{element}</option>;
                  })}
                </select>:
                this.convertAnswerNumber(
                this.props.journal.answerSelf,
                promptData.response.self.answers
              )
              
              }
            </p>
            {
                this.state.makeEdit ?
                <div>
                  <p>Answer Text: </p>
                  <textarea rows="4" cols="50" name="answerText" defaultValue={this.props.journal.answerTextSelf} />
                </div>:
                <div>
                  <p>Answer Text:</p>
                  <p>{this.props.journal.answerTextSelf}</p>
                </div> 
              }
          </div>
          <div>
            <h4>{promptData.questions.anxiety.question}</h4>
            <p>
              Answer:
              {
                this.state.makeEdit ?
                <select defaultValue={this.props.journal.answerAnxiety - 1}>
                  {promptData.response.anxiety.answers.map((element, index) => {
                    return <option key={index} value={index}>{element}</option>;
                  })}
                </select>:
                this.convertAnswerNumber(
                this.props.journal.answerAnxiety,
                promptData.response.anxiety.answers
              )
              
              }
            </p>
            <p>Answer Text: {this.props.journal.answerTextAnxiety}</p>
          </div>
          <div>
            <h4>{promptData.questions.depression.question}</h4>
            <p>
              Answer: 
              {
                this.state.makeEdit ?
                <select defaultValue={this.props.journal.answerDepression - 1}>
                  {promptData.response.depression.answers.map((element, index) => {
                    return <option key={index} value={index}>{element}</option>;
                  })}
                </select>:
                this.convertAnswerNumber(
                this.props.journal.answerDepression,
                promptData.response.depression.answers
              )
              
              }
            </p>
            <p>Answer Text: {this.props.journal.answerTextDepression}</p>
          </div>
          <div>
            <h4>{promptData.questions.concentration.question}</h4>
            <p>
              Answer: 
              {
                this.state.makeEdit ?
                <select defaultValue={this.props.journal.answerConcentration - 1}>
                  {promptData.response.concentration.answers.map((element, index) => {
                    return <option key={index} value={index}>{element}</option>;
                  })}
                </select>:
                this.convertAnswerNumber(
                this.props.journal.answerConcentration,
                promptData.response.concentration.answers
              )
              
              }
            </p>
              {
                this.state.makeEdit ?
                <div>
                  <p>Answer Text:</p>
                  <textarea rows="4" cols="50" name="answerText" defaultValue={this.props.journal.answerTextConcentration} />
                </div>:
                <div>
                  <p>Answer Text:</p>
                  <p>{this.props.journal.answerTextConcentration}</p>
                </div> 
              }
          </div>
          <div>
            <h4>{promptData.questions.family.question}</h4>
            <p>
              Answer: 
              {
                this.state.makeEdit ?
                <select defaultValue={this.props.journal.answerFamily - 1}>
                  {promptData.response.family.answers.map((element, index) => {
                    return <option key={index} value={index}>{element}</option>;
                  })}
                </select>:
                this.convertAnswerNumber(
                this.props.journal.answerFamily,
                promptData.response.family.answers
              )
              
              }
            </p>
            <p>Answer Text: {this.props.journal.answerTextFamily}</p>
          </div>
          <div>
            <h4>{promptData.questions.friendships.question}</h4>
            <p>
              Answer: 
              {
                this.state.makeEdit ?
                <select defaultValue={this.props.journal.answerFriendships - 1}>
                  {promptData.response.friendships.answers.map((element, index) => {
                    return <option key={index} value={index}>{element}</option>;
                  })}
                </select>:
                this.convertAnswerNumber(
                this.props.journal.answerFriendships,
                promptData.response.friendships.answers
              )
              
              }
            </p>
            <p>Answer Text: {this.props.journal.answerTextFriendships}</p>
          </div>
          <div>
            <h4>{promptData.questions.gratitude.question}</h4>
            <p>Answer Text: {this.props.journal.answerTextGratitude}</p>
          </div> */}
        </SelectedPromptData>
      </SelectedPromptContainer>
    );
  }
}

export default PromptResponses;