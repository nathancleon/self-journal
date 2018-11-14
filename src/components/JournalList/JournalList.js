import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllJournalData } from '../../actions/JournalActions';
import moment from 'moment';

class JournalList extends Component {
  constructor(props) {
    super(props)

    this.props.fetchAllJournalData()
  }

  render() {
    console.log(this.props.journal.all);
    return(
      <div>
        <h1>JournalList</h1>
        {
          //if journal data is less than 0, render journal elements onto page
          this.props.journal.all.length != 0 ? 
          this.props.journal.all.map((element, index) => {
            return (
              <div key={index} className="journal-element">
                <h1>{ moment(element.created).format("LLLL") }</h1>
                <p>Answer: {element.answerSelf}</p>
                <p>Answer Text: {element.answerTextSelf}</p>
              </div>
            )
          }): null
        }
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return ({
    journal: reduxState.journal
  })
} 

export default connect(mapStateToProps, {fetchAllJournalData})(JournalList);