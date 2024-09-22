import TodoCard from './TodoCard';

export default function TodoList(props) {
  const { todos } = props;
  return (
    <ul>
      {todos?.map((todo, index) => (
        <TodoCard
          key={`todo-${index}-${Math.random()}`}
          todo={todo}
          index={index}
          {...props}
        />
      ))}
      {/* renders the todo card, which represents a single item */}
    </ul>
  );
}
