import React from 'react';
import { TodoList } from './components/TodoList';

const App: React.FunctionComponent = () => {
  const toDos = [
    { id: 't1', text: 'Finish the course' },
    { id: 't2', text: 'Start a new course' },
  ];
  return (
    <div>
      <TodoList items={toDos} />
    </div>
  );
};

export default App;
