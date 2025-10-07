import { useState } from "react";
import "./TodoItem.css";

function TodoItem({id, text, completed, onDelete, onToggle, onEdit}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    if(editText.trim()) {
      onEdit(id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setEditText(text);
      setIsEditing(false);
    }
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />

      {isEditing ? (
        <input
          type="text"
          className="todo-edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyPress}
          autoFocus
          />
      ) : (
        <span className={`todo-text ${completed ? "completed" : ""}`}>
          {text}
        </span>
      )}

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button className="todo-save" onClick={handleSave}>
              Save
            </button>
            <button
              className="todo-cancel"
              onClick={() => {
                setEditText(text);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="todo-edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="todo-delete" onClick={() => onDelete(id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;