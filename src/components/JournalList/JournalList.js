import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import JournalListItem from './JournalListItem';

class JournalList extends Component {
  constructor(props) {
    super(props)
  }

    render() {

      const journalItemsRender = this.props.journals.map((element, index) => {
        return (
          <JournalListItem 
            onJournalSelect={this.props.onJournalSelect}
            key={index}
            journal={element}
          />
        );
      });

      return(
        <div>
          <h4>JournalList</h4>
          <ul>
            {
              this.props.journals.length != 0 ? journalItemsRender: null
            }
          </ul>
  
        </div>
      );
    }
}


export default JournalList;