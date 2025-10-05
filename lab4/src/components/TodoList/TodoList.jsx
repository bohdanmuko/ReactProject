import TodoItem from "../TodoItem/TodoItem";
import { useTodos } from "../../hooks/useTodos";
import "./TodoList.css";

function TodoList() {
  const {todos, isLoading, error, addTodo, deleteTodo, toggleTodo} = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements.todo.value.trim();
    if (!text) return;
    addTodo(text);
    e.target.reset();
  };

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input name="todo" placeholder="Enter a task..." />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map((t) => (
          <TodoItem
            key={t.id}
            id={t.id}
            text={t.todo}
            completed={t.completed}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
