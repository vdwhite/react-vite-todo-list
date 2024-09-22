import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  function presistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }
  const handleTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    presistData(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((_, todoIndex) => {
      return index !== todoIndex;
    });
    setTodos(newTodoList);
    presistData(newTodoList);
  };

  const handleEditTodo = (index, todo) => {
    handleDeleteTodo(index);
    setTodo(todo);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem('todos');
    if (localTodos) {
      localTodos = JSON.parse(localTodos).todos;
      //set the state
      setTodos(localTodos);
    }
  }, []);

  return (
    <main>
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        handleTodos={handleTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </main>
  );
}

export default App;
