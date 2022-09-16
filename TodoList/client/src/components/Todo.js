import React from 'react'

const Todo = ({ index, todo, todoList, setTodoList }) => {

  const removeTodo = (index) => {
    const filteredTodos = todoList.filter((todo, i) => i !== index)
    setTodoList(filteredTodos)
  }

  const handleCheckbox = (index) => {
    const updatedTodoList = todoList.map((todo, i) => {
      if (i === index) {
        todo.complete = !todo.complete
      }
      return todo
    })
    setTodoList(updatedTodoList)
  }



  const strike = {
    textDecoration: 'line-through'
  }

  return (
    <div>
      {
        (todo.complete === false)
          ? <h2>{todo.title}</h2>
          : <h2 style={strike}>{todo.title}</h2>
      }
      <input type="checkbox" checked={todo.complete} onChange={(e) => handleCheckbox(index)} />
      <button onClick={(e) => removeTodo(index)}>Delete</button>
    </div>
  )
}

export default Todo