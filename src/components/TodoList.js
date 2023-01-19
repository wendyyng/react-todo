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
            todo.complete = !todo.complete
        }
        return todo
    })
    setTodos(updatedTodos)
  }
  const removeTodo = id => {
    
  }

  return (
    <div className="todo">
    <h1>React Todo App</h1>
    <TodoForm onSubmit={addTodo}/>
    <Todo todos={todos} completeTOdo={completeTodo} removeTodo={removeTodo}/>
  
    </div>
  )
}

export default TodoList