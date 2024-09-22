import { useState } from 'react';

export const TodoInput = (props) => {
  const { handleTodos, todo, setTodo } = props;
  return (
    <header>
      <input
        placeholder="todo here"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
        onClick={() => {
          handleTodos(todo);
          setTodo('');
        }}
      >
        add
      </button>
    </header>
  );
};

export default TodoInput;
