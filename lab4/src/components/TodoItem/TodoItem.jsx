import "./TodoItem.css";

function TodoItem({id, text, completed, onDelete, onToggle}) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span className={`todo-text ${completed ? "completed" : ""}`}>
        {text}
      </span>
      <button className="todo-delete" onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
