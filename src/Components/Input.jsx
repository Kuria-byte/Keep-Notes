import React from 'react'

function NoteInput (props) {

  return (
    <div>
      <form className='note'>
        <input
          onChange={props.addTitle}
          name="title"
          placeholder='Title'
          value={props.title} />

        <textarea
          onChange={props.addContent}
          name={props.content}
          placeholder='Take a note...'
          rows='3' />

        <button onClick={props.addNote}>
          Add
        </button>
      </form>
    </div>
  )
}

export default NoteInput
