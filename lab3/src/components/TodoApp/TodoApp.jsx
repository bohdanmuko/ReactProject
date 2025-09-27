import { useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoList from "../TodoList/TodoList";
import "./TodoApp.css"

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
      setTodos([{ id: Date.now(), text}, ...todos ]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );

}

export default TodoApp;
