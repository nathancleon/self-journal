import React from 'react';


import moment from 'moment';

const JournalListItem = ({journal, onJournalSelect}) => {

  console.log(journal, onJournalSelect);
  return(

    <li onClick={() => onJournalSelect(journal)} className="journal-list-item">
      <h1>{moment(journal.created).format("LLLL")}</h1>
    </li>
  )
}

export default JournalListItem;