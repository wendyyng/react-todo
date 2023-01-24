import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
    const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if(!todo.text){
        return
    }
    const newTodos = [...todos, todo]
    setTodos(newTodos)
    console.log(newTodos)
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if(todo.id === id) {
            todo.complete = true
        }
        return todo
    })
    setTodos(updatedTodos)
  }
  const updateTodo = (todoId, newValue) => {
    if(!newValue){
        return
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }


  return (
    <div className="todo">
    <h1>React Todo App</h1>
    <TodoForm onSubmit={addTodo}/>
    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList