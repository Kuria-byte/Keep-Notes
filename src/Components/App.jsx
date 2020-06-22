import React, { useState } from 'react'
import Heading from './Header'
import Note from './Note'
import Footer from './Footer'
import notes from '../Components/notes'
import NoteInput from '../Components/Input'

function composeNote (noteItem) {
  return (
    <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
  )
}

function App () {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function addTitle (event) {
    const userTitle = event.target.value
    setTitle(userTitle)
  }
  function addContent (event) {
    const userContent = event.target.value
    setContent(userContent)
  }
  
  function addNote(key,userTitle,userContent){
    let userNotes=[{key:"5",title:userTitle,content:userContent}];
   notes.push(userNotes)
    console.log(notes);
    console.log(userNotes);
    
    
  }



  return ( <div>
             <Heading />
             {notes.map(composeNote)}
             <NoteInput
               title={title}
               content={content}
               addTitle={addTitle}
               addContent={addContent}
               addNote={addNote} />
             <Footer />
           </div>
  )
}

export default App
