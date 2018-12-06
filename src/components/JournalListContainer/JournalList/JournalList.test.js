import React from 'react';
import {shallow} from 'enzyme';
import JournalList from './JournalList';

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

describe('<JournalList />', () => {

  it('should receive props from JournalListContainer', () => {
    const wrapper = shallow(<JournalList journals={journalData} />);
    expect(wrapper.instance().props.journals).toBe(journalData);
  })

  it('renders the JournalList component', () => {
      const wrapper = shallow(
        <JournalList journals={journalData} />,
        {context: {}, 
        disableLifecycleMethods: false }
      )
    });
});