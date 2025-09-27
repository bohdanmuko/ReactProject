import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ id, text, onRemove }) {
  const [completed, setCompleted] = useState(false);

  return (
    <li className="item">
    <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
    />
    <span className={`text ${completed ? "completed" : ""}`}>{text}</span>
    <button className="delete-button" onClick={() => onRemove(id)}>
        Delete
    </button>
    </li>
  );
}

export default TodoItem;
