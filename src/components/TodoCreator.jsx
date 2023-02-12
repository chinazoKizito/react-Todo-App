import React,  { useState } from 'react'

function TodoCreator({onSubmit}){
  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

      onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input
    })
    setInput("");
  }

  return(
    <form className='todo-form' onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={input}  
      name="textbox"
      required
      className='todo-input'
      placeholder='Enter your todo here'
      onChange={(e) => setInput(e.target.value)}
      />
      <button className="todo-button">Add</button>
      </form>
  )
}

export default TodoCreator