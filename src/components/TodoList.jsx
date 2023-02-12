import React, {useState} from 'react'
import TodoCreator from './TodoCreator'
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    const newTodos =  [todo, ...todos]
    setTodos(newTodos)
  };

  const updateTodo = (todoId, newValue) => {
  setTodos(former => former.map(item => (item.id === todoId ? newValue : item)))

  }

  const removeTodo = id => {
    const remTodoList = [...todos].filter(todo => todo.id !== id)
    setTodos(remTodoList)
  }
  


  return (
    <div>
      <h1>What do you want to Accomplish?</h1>
      <TodoCreator onSubmit={addTodo}/>
      <TodoItem 
      todos={todos} 
      removeTodo={removeTodo}
      updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList
