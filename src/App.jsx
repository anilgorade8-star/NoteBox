import React, { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [details, setDetails] = useState("")
  const [notes, setNotes] = useState([])


  // ADD Note
  const submithandle = (e) => {
    e.preventDefault();

    const Copytask = [...notes]
    if (task !== '') {
      Copytask.push({ task, details })
      setNotes(Copytask)
    }


    setTask('')
    setDetails('')
  }


  // Delete 
  function DeleteNote(index) {

    const copytask = [...notes]
    copytask.splice(index, 1)
    setNotes(copytask)
  }

  return (
    <>
      <div>
        <h1>Add Note</h1>
        <form className='note' onSubmit={submithandle}>
          <input
            id='task'
            type="text"
            placeholder='Enter task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <textarea
            id='details'
            placeholder='write Details'
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button id="btn">Add note</button>
        </form>
      </div>

      <div className='notes'>

        {notes.map((item, index) => {
          return (
            <div className='box' key={index}>
              <h3>{item.task}</h3>
              <p>{item.details}</p>
              <button className='delete' onClick={DeleteNote}>Delete</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App