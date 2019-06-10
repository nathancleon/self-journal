import React, { Component } from "react";
import moment from "moment";
import {
  updateJournalData,
  deleteJournalEntry
} from "../../../../actions/JournalActions";
import { connect } from "react-redux";
import { promptData } from "./promptData";
import {
  SelectedPromptContainer,
  DataContainer,
  SelectedPromptHeader,
  PromptIcons,
  SelectedPromptData,
  UserAnswers,
  UserTextAnswers,
  SubmitButton,
  NavigateLeft,
  NavigateRight,
  NavigationDisabled
} from "./PromptResponsesStyles";
import LeftArrow from "../../../../Assets/angle-left.svg";
import RightArrow from "../../../../Assets/angle-right.svg";

class PromptResponses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: {},
      answerText: {},
      id: "",
      makeEdit: false,
      disableLeftNavigation: true,
      disableRightNavigation: false
    };
  }

  componentWillUpdate(nextProps) {
    if (
      this.state.makeEdit &&
      this.props.journal._id !== nextProps.journal._id
    ) {
      this.setState({
        makeEdit: false
      });
    }
  }

  componentDidMount() {
    console.log(this.props.journal);

    this.setState({
      id: this.props.journal._id
    });
    if (this.props.journalData.length === 1) {
      this.setState({
        disableLeftNavigation: true,
        disableRightNavigation: true
      });
      return;
    }
  }

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

  //----------------------------------------------------------
  // RENDER FUNCTIONS
  //----------------------------------------------------------

  renderAnswerValue(questionIndex) {
    //this pulls just the user answer data (e.g. "answerSelf: Good")
    let journalAnswerArray = Object.values(this.props.journal.answerValues);
    //only return answers if the question index is less than the answer array
    if (questionIndex < journalAnswerArray.length) {
      return (
        <UserAnswers>
          <p>Answer: </p>
          <p>{journalAnswerArray[questionIndex]}</p>
        </UserAnswers>
      );
    } else {
      return null;
    }
  }

  renderAnswerOptions(questionKey, questionIndex) {
    let journalAnswerArray = Object.values(this.props.journal.answerValues);
    let userResponseOptions = promptData.data[questionKey];
    if (!userResponseOptions.answers) {
      return null;
    }

    let responsePropertiesArray = Object.getOwnPropertyNames(promptData.data);
    let renderOptions = userResponseOptions.answers.map(element => {
      return (
        <option key={element} value={element}>
          {element}
        </option>
      );
    });

    return (
      <UserAnswers>
        <p>Answer: </p>
        <select
          onChange={this.saveAnswerEditValue.bind(this)}
          defaultValue={journalAnswerArray[questionIndex]}
          name={responsePropertiesArray[questionIndex]}
        >
          {renderOptions}
        </select>
      </UserAnswers>
    );
  }

  renderAnswerText(questionKey, questionIndex) {
    let responsePropertiesArray = Object.getOwnPropertyNames(promptData.data);
    let journalTextArray = Object.values(this.props.journal.answerTextValues);
    let userTextValue = journalTextArray[questionIndex];
    return (
      <textarea
        onChange={this.saveAnswerEditTextValue.bind(this)}
        rows="4"
        cols="50"
        key={questionKey}
        defaultValue={userTextValue}
        name={responsePropertiesArray[questionIndex]}
      />
    );
  }

  renderAnswerTextValue(questionIndex) {
    let journalTextArray = Object.values(this.props.journal.answerTextValues);
    let userTextValue = journalTextArray[questionIndex];
    return <p>{userTextValue}</p>;
  }

  //----------------------------------------------------------
  // SAVE/SUBMIT/EDIT FUNCTIONS
  //----------------------------------------------------------

  saveAnswerEditValue(event) {
    let editedDataObject = {
      ["answer" + event.target.name]: event.target.value
    };

    let newAnswer = { ...this.state.answer, ...editedDataObject };
    this.setState({
      answer: { ...newAnswer }
    });
  }

  saveAnswerEditTextValue(event) {
    let editedDataObject = {
      ["answerText" + event.target.name]: event.target.value
    };

    let newAnswerText = { ...this.state.answerText, ...editedDataObject };
    this.setState({
      answerText: { ...newAnswerText }
    });
  }

  submitEditedValues(event) {
    event.preventDefault();
    let newAnswers = {
      answerValues: { ...this.state.answer },
      answerTextValues: { ...this.state.answerText }
    };
    let newAnswerValues = Object.assign(
      this.props.journal.answerValues,
      newAnswers.answerValues
    );
    let newAnswerTextValues = Object.assign(
      this.props.journal.answerTextValues,
      newAnswers.answerTextValues
    );
    let newData = {
      answerValues: newAnswerValues,
      answerTextValues: newAnswerTextValues,
      userID: this.props.userID,
      token: this.props.token
    };
    let id = this.state.id;

    this.setState({
      makeEdit: false
    });

    return this.props.updateJournalData(newData, id);
  }

  deleteJournal() {
    return this.props.deleteJournalEntry(this.props.journal);
  }

  //----------------------------------------------------------
  // SELECT FUNCTIONS
  //----------------------------------------------------------

  selectPreviousJournalDate() {
    console.log(this.state.id);
    let currentJournalIndex = this.props.journalData.indexOf(
      this.props.journal
    );
    let previousJournal = this.props.journalData[currentJournalIndex - 1];
    console.log(currentJournalIndex, previousJournal);
    if (currentJournalIndex - 1 === 0) {
      this.props.changeJournal(previousJournal);
      this.setState({
        disableLeftNavigation: true,
        disableRightNavigation: false,
        id: previousJournal._id
      });
      return;
    } else {
      this.props.changeJournal(previousJournal);
      this.setState({
        disableLeftNavigation: false,
        disableRightNavigation: false,
        id: previousJournal._id
      });
    }
  }

  selectNextJournalDate() {
    console.log(this.state.id);
    let currentJournalIndex = this.props.journalData.indexOf(
      this.props.journal
    );
    let nextJournal = this.props.journalData[currentJournalIndex + 1];
    this.setState({
      disableLeftNavigation: false,
      id: nextJournal._id
    });

    console.log(currentJournalIndex);

    if (currentJournalIndex + 1 === this.props.journalData.length - 1) {
      this.props.changeJournal(nextJournal);
      this.setState({
        disableRightNavigation: true,
        id: nextJournal._id
      });
      return;
    } else {
      this.props.changeJournal(nextJournal);
    }
  }

  //----------------------------------------------------------
  // RENDER
  //----------------------------------------------------------

  render() {
    return (
      <SelectedPromptContainer>
        {this.state.disableLeftNavigation ? (
          <NavigationDisabled />
        ) : (
          <NavigateLeft onClick={this.selectPreviousJournalDate.bind(this)}>
            <img src={LeftArrow} alt="move backward" />
          </NavigateLeft>
        )}
        <DataContainer>
          <SelectedPromptHeader>
            <h1>
              Journal
              <span>{moment(this.props.journal.created).format("LL")}</span>
            </h1>
            <PromptIcons>
              <svg
                onClick={this.toggleEdit.bind(this)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z" />
              </svg>
              <svg
                onClick={this.deleteJournal.bind(this)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z" />
              </svg>
            </PromptIcons>
          </SelectedPromptHeader>
          <SelectedPromptData>
            {//Render all questions from promptData object to page
            Object.keys(promptData.data).map((key, index) => {
              return (
                <div key={index}>
                  <h4 key={index}>{promptData.data[key].question}</h4>
                  <div>
                    {//if edit state is active, return answer options, else return just the value from user data to the page
                    this.state.makeEdit
                      ? this.renderAnswerOptions(key, index)
                      : this.renderAnswerValue(index)}
                  </div>
                  <UserTextAnswers>
                    {//if edit state is active, return editable textarea, else return text from user data to the page
                    this.state.makeEdit
                      ? this.renderAnswerText(key, index)
                      : this.renderAnswerTextValue(index)}
                  </UserTextAnswers>
                </div>
              );
            })}
            {this.state.makeEdit ? (
              <SubmitButton onClick={this.submitEditedValues.bind(this)}>
                Save
              </SubmitButton>
            ) : null}
          </SelectedPromptData>
        </DataContainer>
        {this.state.disableRightNavigation ? (
          <NavigationDisabled />
        ) : (
          <NavigateRight onClick={this.selectNextJournalDate.bind(this)}>
            <img src={RightArrow} alt="move forward" />
          </NavigateRight>
        )}
      </SelectedPromptContainer>
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
  { updateJournalData, deleteJournalEntry }
)(PromptResponses);
