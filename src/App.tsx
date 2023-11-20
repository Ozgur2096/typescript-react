import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { NewTodo } from './components/NewTodo';

const App: React.FunctionComponent = () => {
  const [toDos, setTodos] = useState([
    { id: 't1', text: 'Finish the course' },
    { id: 't2', text: 'Start a new course' },
  ]);

  const todoAddHandler = (text: string) => {
    const newId = Math.random() * 10000;
    const newTodo = { id: newId.toString(), text: text };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const todoDeleteHandler = (deletedTodoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== deletedTodoId);
    });
  };

  return (
    <div>
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList items={toDos} todoDeleteHandler={todoDeleteHandler} />
    </div>
  );
};

export default App;
