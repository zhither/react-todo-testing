import React, { useState } from 'react'
import './AddTodo.scss'

const AddTodo = ({ addTodo }) => {
  const [todoVal, setTodoVal] = useState('')

  const updateInputVal = e => setTodoVal(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(todoVal)
    setTodoVal('')
  }
  return (
    <div>
      <form className='form-container' onSubmit={handleSubmit}>
        <input
          className='input-field'
          aria-label="Add Todo"
          type="text"
          required
          value={todoVal}
          onChange={updateInputVal}
        />
        <button type="submit" className='submit-btn'>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
