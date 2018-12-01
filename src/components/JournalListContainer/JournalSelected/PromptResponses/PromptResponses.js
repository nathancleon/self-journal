import React, { Component } from "react";
import moment from "moment";
import { updateJournalData, deleteJournalEntry } from "../../../../actions/JournalActions";
import { connect } from "react-redux";
import {
  SelectedPromptContainer,
  SelectedPromptHeader,
  PromptIcons,
  SelectedPromptData,
  UserAnswers,
  UserTextAnswers,
  SubmitButton
} from "./PromptResponsesStyles";
//----------------------------------------------------------
// DATA
//----------------------------------------------------------

const promptData = {
  data: {
    Self: {
      question: "How do you describe your overall mental health?",
      answers: ["Poor", "Not Great", "Good", "Great", "Excellent"]
    },
    Anxiety: {
      question: "How anxious would you say you feel?",
      answers: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"]
    },
    Depression: {
      question: "How depressed would you say you feel?",
      answers: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"]
    },
    Concentration: {
      question: "How would you describe your ability to concentrate?",
      answers: ["Poor", "Not Great", "Good", "Great", "Excellent"]
    },
    Family: {
      question: "How do would you rate the connections you have with your family?",
      answers: ["Poor", "Not Great", "Good", "Great", "Excellent"]
        
    },
    Friendships: {
      question: "How do would you rate the connections you have with your friends?", 
      answers: ["Poor", "Not Great", "Good", "Great", "Excellent"]
    },
    Gratitude: {
      question: "List at least three things you are grateful for."
    }
  }
};


//----------------------------------------------------------
// COMPONENT
//----------------------------------------------------------

class PromptResponses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataObject: {
      },
      makeEdit: false
    }
  }

  //----------------------------------------------------------
  // Lifecycle Methods
  //----------------------------------------------------------

   componentWillUpdate(nextProps) {
    if (this.state.makeEdit && this.props.journal._id !== nextProps.journal._id) {
      this.setState({
        makeEdit: false
      })
    }
    
}

  //----------------------------------------------------------
  // FUNCTIONS
  //----------------------------------------------------------

  toggleEdit() {
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
        <UserAnswers>
          <p>Answer: </p>
          <p>{journalAnswerArray[questionIndex]}</p>
        </UserAnswers>
        )
    } else {
      return null;
    }
    
  }

  renderAnswerOptions(questionKey, questionIndex) {

    //TODO: refactor this function to use only keys to update, limit use of index
    //also refactor data model in database so that slice is not needed

    //this pulls just the user answer data (e.g. "answerSelf: Good")
    let journalAnswerArray = Object.entries(this.props.journal).slice(3, -9).map(newArray => newArray[1]);

    let userResponseOptions = promptData.data[questionKey];
    if(!userResponseOptions.answers) {
      return null;
    }

    let renderOptions = userResponseOptions.answers.map(element => {
      return <option key={element} value={element}>{element}</option>;
    })

    let responsePropertiesArray = Object.getOwnPropertyNames(promptData.data);

    return (
      <UserAnswers>
        <p>Answer: </p>
        <select onChange={this.saveAnswerEditValue.bind(this)} defaultValue={journalAnswerArray[questionIndex]} name={responsePropertiesArray[questionIndex]}>{renderOptions}</select>
      </UserAnswers>
      );
  }

  renderAnswerText(questionKey, questionIndex) {
    let responsePropertiesArray = Object.getOwnPropertyNames(promptData.data);
    let journalTextArray = Object.entries(this.props.journal).slice(9, -2).map(newArray => newArray[1]);
    let userTextValue = journalTextArray[questionIndex];
       return <textarea onChange={this.saveAnswerEditTextValue.bind(this)} rows="4" cols="50" key={questionKey} defaultValue={userTextValue} name={responsePropertiesArray[questionIndex]}></textarea>;
  }

  renderAnswerTextValue(questionIndex) {
    let journalTextArray = Object.entries(this.props.journal).slice(9, -2).map(newArray => newArray[1]);
    let userTextValue = journalTextArray[questionIndex]; 
    return <textarea rows="4" cols="50" key={userTextValue} defaultValue={journalTextArray[questionIndex]} readOnly></textarea>
  }

  saveAnswerEditValue(event) {
    let newDataObject = {...this.state.dataObject};
    let editedDataObject = {...newDataObject, ['answer' + event.target.name]: event.target.value};
    this.setState({...this.state, dataObject: {...editedDataObject}});
    console.log(this.state);
  }

  saveAnswerEditTextValue(event) {
    
    let newDataObject = {...this.state.dataObject};
    let editedDataObject = {...newDataObject, ['answerText' + event.target.name]: event.target.value};
    this.setState({...this.state, dataObject: {...editedDataObject}});
    console.log(this.state);
  }

  submitEditedValues(event) {
    console.log('submitted edited values ran');
    event.preventDefault();
    let newData = Object.assign({}, this.state.dataObject)
    newData._id = this.props.journal._id;
    newData.position = this.props.journal.position;
    newData.userID = this.props.userID;
    newData.token = this.props.token;

    console.log('edited values data ' + newData);

    this.setState({
      makeEdit: false
    });

    return this.props.updateJournalData(newData);
  }

  deleteJournal() {
    return this.props.deleteJournalEntry(this.props.journal);
  }

  //----------------------------------------------------------
  // RENDER
  //----------------------------------------------------------

  render() {
    return (
      <SelectedPromptContainer>
            <SelectedPromptHeader>
              <h1>
                Journal from {moment(this.props.journal.created).format("LL")}
              </h1>
              <PromptIcons>
                  <svg onClick={this.toggleEdit.bind(this)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/></svg>
                  <svg onClick={this.deleteJournal.bind(this)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"/></svg>
              </PromptIcons>
            </SelectedPromptHeader>
            <SelectedPromptData>
            {
              //Render all questions from promptData object to page
              Object.keys(promptData.data).map((key, index) => {
                return (
                  <div key={index}>
                    <h4 key={index}>{promptData.data[key].question}</h4>
                    <div>
                          {
                            //if edit state is active, return answer options, else return just the value from user data to the page
                            this.state.makeEdit ?
                            this.renderAnswerOptions(key, index): 
                            this.renderAnswerValue(index)
                          }
                    </div>
                    <UserTextAnswers>
                      {
                        //if edit state is active, return editable textarea, else return readonly textarea from user data to the page
                        this.state.makeEdit ?
                        this.renderAnswerText(key, index): 
                        this.renderAnswerTextValue(index)
                        }
                    </UserTextAnswers>
                  </div>
                );
              })
            }
            {
              this.state.makeEdit ?
              <SubmitButton onClick={this.submitEditedValues.bind(this)}>Submit</SubmitButton>:
              null
            }
            </SelectedPromptData>
      </SelectedPromptContainer>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log(reduxState.user.user.token);
  return {
    userID: reduxState.user.user.id,
    token: reduxState.user.user.token
  };
};


export default connect(
  mapStateToProps,
  { updateJournalData, deleteJournalEntry }
)(PromptResponses);

