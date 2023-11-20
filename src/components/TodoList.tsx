import React from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
  todoDeleteHandler: (deletedTodoId: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  items,
  todoDeleteHandler,
}) => {
  return (
    <ul>
      {items.map((todo: { id: string; text: string }) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button
            onClick={() => {
              todoDeleteHandler(todo.id);
            }}
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};
