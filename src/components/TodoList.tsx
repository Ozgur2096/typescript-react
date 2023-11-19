import React from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
}

export const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((todo: { id: string; text: string }) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};
