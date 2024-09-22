import { useState } from 'react';

export const TodoCard = (props) => {
  const { todo, handleEditTodo, handleDeleteTodo, index } = props;
  const [showInput, setShowInput] = useState(false);
  return (
    <div>
      <li key={`${todo}-item`}>{todo}</li>
      <button
        onClick={() => {
          handleDeleteTodo(index);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          handleEditTodo(index, todo);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default TodoCard;
