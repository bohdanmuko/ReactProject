import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css"

function TodoList({ todos, onRemoveTodo }) {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onRemove={onRemoveTodo}
        />
      ))}
    </ul>

  );
}

export default TodoList;
