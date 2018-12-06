import React from 'react';
import {shallow} from 'enzyme';
import JournalListItem from './JournalListItem';

let journalData = [
  {
    answerAnxiety: "text",
    answerConcentration: "text",
    answerDepression: "text",
    answerFamily: "text",
    answerFriendships: "text",
    answerSelf: "text",
    answerTextAnxiety: "sdgfsdgsdgf",
    answerTextConcentration: "sdfgsdgf",
    answerTextDepression: "sdgfsdfgsdf",
    answerTextFamily: "sdfgsdgf",
    answerTextFriendships: "sdgfsdfg",
    answerTextSelf: "sgfsdgs"
  },
  {
    answerAnxiety: "text",
    answerConcentration: "text",
    answerDepression: "text",
    answerFamily: "text",
    answerFriendships: "text",
    answerSelf: "text",
    answerTextAnxiety: "sdgfsdgsdgf",
    answerTextConcentration: "sdfgsdgf",
    answerTextDepression: "sdgfsdfgsdf",
    answerTextFamily: "sdfgsdgf",
    answerTextFriendships: "sdgfsdfg",
    answerTextSelf: "sgfsdgs"
  }
]

describe('<JournalListItem />', () => {

  it('should receive props from JournalList', () => {
    const wrapper = shallow(
    <JournalListItem 
      onJournalSelect={journalData[0]} 
      journal={journalData[0]} 
      key={journalData[0]} 
      position={journalData[0]} />);
    expect(wrapper.instance().props.journal).toBe(journalData[0]);
    expect(wrapper.instance().props.onJournalSelect).toBe(journalData[0]);
    expect(wrapper.instance().props.position).toBe(journalData[0]);
  })

  it('renders the JournalList component', () => {
      const wrapper = shallow(
        <JournalListItem 
        onJournalSelect={journalData[0]} 
        journal={journalData[0]} 
        key={journalData[0]} 
        position={journalData[0]} />,
        {context: {}, 
        disableLifecycleMethods: false }
      )
    });
});