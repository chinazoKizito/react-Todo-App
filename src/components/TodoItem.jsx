import React, {useState} from 'react'
import TodoCreator from './TodoCreator'

function TodoItem({ todos, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate =  value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

     if(edit.id){
        return <TodoCreator edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className="todo-row" key={index}>
            <div key={todo.id}>
                {todo.text}
            </div>
            <div className='icons'>
                <button 
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
                >
                    X
                </button>
                <button 
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className='edit-icon'
                >
                    Edit
                </button>    
            </div>
        </div>
    ))
}

export default TodoItem