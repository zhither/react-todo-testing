import React, { useState } from 'react'
import './Todo.scss'

const Todo = ({ deleteTodo, updateTodo, todo }) => {
  const [edit, setEdit] = useState(false)
  const [newVal, setNewVal] = useState('')

  const handleDelete = () => deleteTodo(todo.id)

  const handleEditState = () => setEdit(!edit)

  const handleUpdateNewVal = e => setNewVal(e.target.value)

  const handleSave = () => updateTodo(todo, newVal)

  return (
    <li>
      <div className='todo-item' data-testid={`${todo.todo.replace(/[ ]/g, '-')}-wrapper`}>
        {!edit && <div className='item-name' data-testid="itemName">{todo.todo}</div>}
        {edit && (
          <div className='UpdateTodo'>
            <input
              className='update-input'
              data-testid="updateInput"
              type="text"
              placeholder={todo.todo}
              value={newVal}
              onChange={handleUpdateNewVal}
            />
          </div>
        )}

        <div className='item-edit' onClick={handleEditState}>
          {edit ? (
            <div className='save-edits' data-testid="saveEdits" onClick={handleSave}>
              save
            </div>
          ) : (
            <span>edit</span>
          )}
        </div>

        {!edit && (
          <div className='item-remove' data-testid="itemRemove" onClick={handleDelete}>
            delete
          </div>
        )}
      </div>
    </li>
  )
}

export default Todo
