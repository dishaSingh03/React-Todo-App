import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      {/* we have given onClick --calling the function and passing the function */}
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem

