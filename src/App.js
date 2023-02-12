import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';



function App() {
  return (
    <div className="todoApp">
      <Header/>
      <TodoList/>
    </div>
  );
}


export default App;
