import React, { useState } from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { Todo } from './todo.model'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodo => [
      ...prevTodo,
      { id: Math.random().toString(), text}
    ])
  }

  const todoDeleteHandler = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(f => f.id !== id);
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList onDeleteTodo={todoDeleteHandler} items={todos} />
  </div>
  );
}

export default App;
