import React, {useState} from 'react'
import {IoIosCloseCircle} from 'react-icons/io'
import {MdModeEditOutline} from 'react-icons/md'

const Todo = ({todos, completeTodo, removeTodo, }) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    return (
            <div>
                {todos.length > 0 
                ? (
          todos.map((todo, index) => {
              return (
                  <div
                  className={todo.complete ? 'todo-row complete' : 'todo-row'} 
                  key={index}
                  >
                    <div
                    key={todo.id}
                    onClick={() => completeTodo(todo.id)}
                    >
                      {todo.text}
                    </div>
                    <div>
                        <IoIosCloseCircle 
                        onClick={() => removeTodo(todo.id)}
                        className='delete-icon'
                        />
                        <MdModeEditOutline 
                        onClick={() => setEdit({id: todo.id, value: todo.text})}
                        className='edit-icon'
                        />
                    </div>

                </div>
                      
              )
          })

      )
      :
      (
        <p>No todo yet</p>
      )
      }
      </div>
    )
       
}

export default Todo