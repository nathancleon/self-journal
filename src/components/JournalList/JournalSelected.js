import React from 'react';

const JournalSelected = ({journal}) => {
  if (!journal) {
    return <div>You haven't created a journal entry yet</div>
  }

  const style = {
    color: 'blue'
  }

  return (
    <div>
      <p style={style}>Journal Selected {journal.created}</p>
      <p style={style}>Answer: {journal.answerSelf}</p>
      <p style={style}>Answer Text: {journal.answerTextSelf}</p>
    </div>
  )
}

export default JournalSelected;