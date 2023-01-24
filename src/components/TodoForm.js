import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoForm = (props) => {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: uuidv4(),
            text: input,
            complete: false
        })
        setInput('')
    }

  return (
    <div>
        <h2>To do Form</h2>
        <form onSubmit={handleSubmit}>
            <input 
                onChange={handleChange} 
                value={input} 
                placeholder="Add a todo" 
                type="text"></input>
            <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default TodoForm